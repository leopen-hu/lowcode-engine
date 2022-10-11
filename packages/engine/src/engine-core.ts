import { createElement } from 'react';
import { render } from 'react-dom';
import { globalContext, Editor, engineConfig, EngineOptions } from '@alilc/lowcode-editor-core';
import { Designer, LowCodePluginManager, PluginPreference } from '@alilc/lowcode-designer';
import { Skeleton, Workbench } from '@alilc/lowcode-editor-skeleton';
import { isPlainObject } from '@alilc/lowcode-utils';
import { componentMetaParser } from './plugins/plugin-component-meta-parse';
import { builtinSettersRegistry } from './plugins/plugin-builtin-setters-registry';
import { defaultPanelsRegistry } from './plugins/plugin-default-panels-registry';

const editor = new Editor();
globalContext.register(editor, Editor);
globalContext.register(editor, 'editor');

const skeleton = new Skeleton(editor);
editor.set('skeleton' as any, skeleton);

const designer = new Designer({ editor });
editor.set('designer' as any, designer);

const plugins = new LowCodePluginManager(editor).toProxy();
editor.set('plugins' as any, plugins);

// declare this is open-source version
export const isOpenSource = true;
engineConfig.set('isOpenSource', isOpenSource);

// webpack defined variable
export declare const VERSION_PLACEHOLDER: string;
export const version = VERSION_PLACEHOLDER;
engineConfig.set('ENGINE_VERSION', version);

// 注册一批内置插件
(async function registerPlugins() {
  // 处理 editor.set('assets')，将组件元数据创建好
  await plugins.register(componentMetaParser);
  // 注册默认的 setters
  await plugins.register(builtinSettersRegistry);
  await plugins.register(defaultPanelsRegistry);
})();

let engineInitd = false;
export async function init(
  container?: HTMLElement,
  options?: EngineOptions,
  pluginPreference?: PluginPreference,
) {
  if (engineInitd) return;
  engineInitd = true;
  let engineOptions = null;
  let engineContainer = null;
  if (isPlainObject(container)) {
    engineOptions = container;
    engineContainer = document.createElement('div');
    document.body.appendChild(engineContainer);
  } else {
    engineOptions = options;
    engineContainer = container;
    if (!container) {
      engineContainer = document.createElement('div');
      document.body.appendChild(engineContainer);
    }
  }
  engineContainer.id = 'engine';
  engineConfig.setEngineOptions(engineOptions as any);

  await plugins.init(pluginPreference as any);

  render(
    createElement(Workbench, {
      skeleton,
      className: 'engine-main',
      topAreaItemClassName: 'engine-action-item',
    }),
    engineContainer,
  );
}

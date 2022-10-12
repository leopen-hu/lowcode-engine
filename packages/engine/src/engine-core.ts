import { createElement } from 'react';
import { render } from 'react-dom';
import { engineConfig, EngineOptions } from '@alilc/lowcode-editor-core';
import { Workbench, registerDefaults } from '@alilc/lowcode-editor-skeleton';
import { PluginPreference } from '@alilc/lowcode-plugin';
import { isPlainObject } from '@alilc/lowcode-utils';
import { initGlobalContext } from './init-global-context';
import { registerBuiltinPlugins } from './plugins';

const { skeleton, plugins } = initGlobalContext();
registerDefaults();
registerBuiltinPlugins();

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

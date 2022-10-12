import { Editor, globalContext } from '@alilc/lowcode-editor-core';
import { builtinSettersRegistry } from './plugin-builtin-setters-registry';
import { componentMetaParser } from './plugin-component-meta-parse';
import { defaultPanelsRegistry } from './plugin-default-panels-registry';

export const registerBuiltinPlugins = async () => {
  const editor = globalContext.get<Editor>('editor');
  const plugins = editor.get('plugins');

  // 处理 editor.set('assets')，将组件元数据创建好
  await plugins.register(componentMetaParser);
  // 注册默认的 setters
  await plugins.register(builtinSettersRegistry);
  await plugins.register(defaultPanelsRegistry);
};

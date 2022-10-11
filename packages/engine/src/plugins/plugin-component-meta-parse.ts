import { globalContext } from '@alilc/lowcode-editor-core';
import { ILowCodePluginContext } from 'designer/src/plugin';

export const componentMetaParser = (ctx: ILowCodePluginContext) => {
  const editor = globalContext.get('editor');
  const designer = editor.get('designer');

  return {
    init() {
      editor.onGot('assets', (assets: any) => {
        const { components = [] } = assets;
        designer.buildComponentMetasMap(components);
      });
    },
  };
};
componentMetaParser.pluginName = '___component_meta_parser___';

import { ILowCodePluginContext } from '@alilc/lowcode-designer';
import { engineConfig } from '@alilc/lowcode-editor-core';

export const builtinSettersRegistry = (ctx: ILowCodePluginContext) => {
  return {
    init() {
      if (engineConfig.get('disableDefaultSetters')) return;
      const builtinSetters = require('@alilc/lowcode-engine-ext')?.setters;
      if (builtinSetters) {
        ctx.setters.registerSetter(builtinSetters);
      }
    },
  };
};
builtinSettersRegistry.pluginName = '___builtin_setter_registry___';

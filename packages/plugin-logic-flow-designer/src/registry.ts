import { PluginRegistry } from '@alilc/lowcode-plugin';
import LogicFlowDesignerPlugin from './plugin';

export const logicFlowDesignerPluginRegistry = (pluginRegistry: PluginRegistry) => {
  return {
    name: 'lowcode.plugins.logicFlowDesigner',
    location: 'mainArea',
    type: 'Widget',
    component: LogicFlowDesignerPlugin,
    init: () => {
      pluginRegistry.hidePlugin('lowcode.plugins.logicFlowDesigner');
    },
  };
};

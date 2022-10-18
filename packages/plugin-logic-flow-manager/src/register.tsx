import { PluginRegistry } from '@alilc/lowcode-plugin';
import { LogicFlowManager } from './component';

export const logicFlowManagerPluginRegistry = (pluginRegistry: PluginRegistry) => {
  const { showPlugin, hidePlugin } = pluginRegistry;
  return {
    name: 'lowcode.plugins.logicFlowManager',
    location: 'leftArea',
    type: 'Widget',
    component: <LogicFlowManager showPlugin={showPlugin} hidePlugin={hidePlugin} />,
  };
};

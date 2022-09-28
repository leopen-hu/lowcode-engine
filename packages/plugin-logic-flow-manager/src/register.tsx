import { ILowCodePluginContext } from '@alilc/lowcode-engine';
import { LogicFlowManager } from './index';
// import { LogicManage } from './logic-manage';
// import { EngineContextProvider } from './providers/engine-context-provider';

export const LogicFlowManagerPlugin = (ctx: ILowCodePluginContext) => {
  return {
    name: 'LogicFlowManagerPlugin',
    async init() {
      const { skeleton } = ctx;

      skeleton.add({
        area: 'leftArea',
        name: 'variableManage',
        type: 'Panel',
        props: {
          icon: 'list',
          description: 'logic管理',
        },
        content: <LogicFlowManager skeleton={skeleton} />,
      });
    },
  };
};
LogicFlowManagerPlugin.pluginName = 'LogicFlowManagerPlugin';

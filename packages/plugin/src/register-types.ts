import { ReactNode } from 'react';

export type Location = 'left' | 'right'; // ...

/**
 * plugin 注册时可调用的方法合集
 */
export interface PluginRegistry {
  // registerMeta: (pluginMeta: PluginMeta) => void;
  showPlugin: (pluginName: string) => void;
  hidePlugin: (pluginName: string) => void;
  getData: <T = any>(pluginName: string) => T;
  onSave: <T = any>(data: T, pluginName: string) => void;
  // registerCommand: (commandId: string, func: () => any) => void;
  // getCommand: (commandId: string) => void;
  // executeCommand: <T = any>(commandId: string, commandArgs: T) => void;
}

export type PluginRegistryCreator = (pluginRegistry: PluginRegistry) => {
  name: string;
  location: Location; // 位置
  type: string; // 插件类型
  component: ReactNode | ((props?: any) => ReactNode);
  init?: () => void; // 插件的初始化方法，会调用一些 plugin 注册函数
  destroy?: () => any;
  autoInit?: boolean; // 自动初始化
  override?: boolean; // 允许覆盖同名组件
  ideVersion: string; // 适配的 ide 版本
};

export interface PluginManage {
  register: (pluginRegistryCreator: PluginRegistryCreator) => void;
}

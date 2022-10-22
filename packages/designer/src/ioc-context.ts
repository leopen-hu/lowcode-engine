import { IocContext } from 'power-di';

/**
 * 全局上下文。直接使用 power-di 提供全局上下文，不再依赖 editor-core
 */
export const globalContext = IocContext.DefaultInstance;

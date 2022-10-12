import classes from './modules/classes';
import symbols from './modules/symbols';
import './modules/live-editing';
import { printVersionLog } from './print-version-log';
import { initEngineConfig } from './init-engine-config';

export * from './engine-core';
export * from './modules/editor-types';
export * from './modules/skeleton-types';
export * from './modules/designer-types';
export * from './modules/lowcode-types';
export * from './modules/shell-cabin';

export const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
  symbols,
  classes,
};

const { version } = initEngineConfig();
printVersionLog(version);

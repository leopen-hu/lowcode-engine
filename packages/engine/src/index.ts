import { version } from './engine-core';
import classes from './modules/classes';
import symbols from './modules/symbols';
import { registerDefaults } from '@alilc/lowcode-editor-skeleton';
import './modules/live-editing';

registerDefaults();

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

console.log(
  `%c AliLowCodeEngine %c v${version} `,
  'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;',
  'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;',
);

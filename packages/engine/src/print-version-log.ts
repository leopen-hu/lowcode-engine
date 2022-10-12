import { engineConfig } from '@alilc/lowcode-editor-core';

export const printVersionLog = (version: string, logger = console) => {
  const _version = version || engineConfig.get('ENGINE_VERSION');

  logger.log(
    `%c AliLowCodeEngine %c v${_version} `,
    'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;',
    'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;',
  );
};

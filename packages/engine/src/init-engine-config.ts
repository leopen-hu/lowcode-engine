import { engineConfig } from '@alilc/lowcode-editor-core';

export declare const VERSION_PLACEHOLDER: string;

export const initEngineConfig = () => {
  const isOpenSource = true;
  engineConfig.set('isOpenSource', isOpenSource);

  // webpack defined variable
  const version = VERSION_PLACEHOLDER;
  engineConfig.set('ENGINE_VERSION', version);

  return {
    isOpenSource,
    version,
  };
};

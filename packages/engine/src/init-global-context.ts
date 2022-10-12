import { Designer } from '@alilc/lowcode-designer';
import { Editor, globalContext } from '@alilc/lowcode-editor-core';
import { Skeleton } from '@alilc/lowcode-editor-skeleton';
import { LowCodePluginManager } from '@alilc/lowcode-plugin';

export function initGlobalContext() {
  const editor = new Editor();
  globalContext.register(editor, Editor);
  globalContext.register(editor, 'editor');

  const skeleton = new Skeleton(editor);
  editor.set('skeleton' as any, skeleton);

  const designer = new Designer({ editor });
  editor.set('designer' as any, designer);

  const plugins = new LowCodePluginManager(editor).toProxy();
  editor.set('plugins' as any, plugins);

  return {
    editor,
    skeleton,
    designer,
    plugins,
  };
}

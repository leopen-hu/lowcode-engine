import { engineConfig, globalContext } from '@alilc/lowcode-editor-core';
import { getLogger } from '@alilc/lowcode-utils';
import { Hotkey, Project, Skeleton, Setters, Material, Event } from '@alilc/lowcode-shell';
import { TransformStage } from '@alilc/lowcode-types';
import * as editorCabin from './editor-cabin';
import getDesignerCabin from './designer-cabin';
import getSkeletonCabin from './skeleton-cabin';
import utils from './utils';

const editor = globalContext.get('editor');
const plugins = editor.get('plugins');
const innerSkeleton = editor.get('skeleton');
const designer = editor.get('designer');
const { project: innerProject } = designer;

const hotkey = new Hotkey();
const project = new Project(innerProject);
const skeleton = new Skeleton(innerSkeleton);
const setters = new Setters();
const material = new Material(editor);
const config = engineConfig;
const event = new Event(editor, { prefix: 'common' });
const logger = getLogger({ level: 'warn', bizName: 'common' });
const designerCabin = getDesignerCabin(editor);
const skeletonCabin = getSkeletonCabin(innerSkeleton);
const objects = {
  TransformStage,
};
const common = {
  utils,
  objects,
  editorCabin,
  designerCabin,
  skeletonCabin,
};

export {
  skeleton,
  plugins,
  project,
  setters,
  material,
  config,
  event,
  logger,
  hotkey,
  common,
  // 兼容原 editor 的事件功能
  event as editor,
};

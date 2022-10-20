import { ILowCodePluginContext } from '@alilc/lowcode-plugin';
import { engineConfig, globalContext } from '@alilc/lowcode-editor-core';
import { SettingsPrimaryPane } from '@alilc/lowcode-setting-pane';
import DesignerPlugin from '@alilc/lowcode-plugin-designer';
import Outline, { OutlineBackupPane, getTreeMaster } from '@alilc/lowcode-plugin-outline-pane';

export const defaultPanelsRegistry = (ctx: ILowCodePluginContext) => {
  const editor = globalContext.get('editor');
  const designer = editor.get('designer');
  const { skeleton } = ctx;

  return {
    init() {
      skeleton.add({
        area: 'mainArea',
        name: 'designer',
        type: 'Widget',
        content: DesignerPlugin,
      });
      // skeleton.add({
      //   area: 'leftArea',
      //   name: 'LogicFlowManager',
      //   type: 'Widget',
      //   props: {
      //     align: 'bottom',
      //   },
      //   content: LogicFlowManager,
      //   contentProps: { skeleton },
      // });
      if (!engineConfig.get('disableDefaultSettingPanel')) {
        skeleton.add({
          area: 'rightArea',
          name: 'settingsPane',
          type: 'Panel',
          content: SettingsPrimaryPane,
          props: {
            ignoreRoot: true,
          },
        });
      }

      // by default in float area;
      let isInFloatArea = true;
      const hasPreferenceForOutline = editor
        ?.getPreference()
        ?.contains('outline-pane-pinned-status-isFloat', 'skeleton');
      if (hasPreferenceForOutline) {
        isInFloatArea = editor
          ?.getPreference()
          ?.get('outline-pane-pinned-status-isFloat', 'skeleton');
      }

      skeleton.add({
        area: 'leftArea',
        name: 'outlinePane',
        type: 'PanelDock',
        content: Outline,
        panelProps: {
          area: isInFloatArea ? 'leftFloatArea' : 'leftFixedArea',
          keepVisibleWhileDragging: true,
          ...engineConfig.get('defaultOutlinePaneProps'),
        },
      });
      skeleton.add({
        area: 'rightArea',
        name: 'backupOutline',
        type: 'Panel',
        props: {
          condition: () => {
            return designer.dragon.dragging && !getTreeMaster(designer).hasVisibleTreeBoard();
          },
        },
        content: OutlineBackupPane,
      });
    },
  };
};
defaultPanelsRegistry.pluginName = '___default_panels___';

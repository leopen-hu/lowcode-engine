import {
  Skeleton as InnerSkeleton,
  Workbench as InnerWorkbench,
} from '@alilc/lowcode-editor-skeleton';

import { createSettingFieldView, PopupContext, PopupPipe } from '@alilc/lowcode-setting-pane';

export default function getSkeletonCabin(skeleton: InnerSkeleton) {
  return {
    createSettingFieldView,
    PopupContext,
    PopupPipe,
    Workbench: (props: any) => <InnerWorkbench {...props} skeleton={skeleton} />, // hijack skeleton
  };
}

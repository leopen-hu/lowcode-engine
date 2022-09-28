import React, { FC, useState } from 'react';
import './index.css';
import { Skeleton } from '@alilc/lowcode-shell';

export interface LogicFlowManagerProps {
  skeleton: Skeleton;
}

export const LogicFlowManager: FC<LogicFlowManagerProps> = ({ skeleton }) => {
  const [show, setShow] = useState(false);

  const toggleLogicDesigner = () => {
    if (show) {
      skeleton.showWidget('LogicFlowDesignerPlugin');
      skeleton.hideArea('rightArea');
    } else {
      skeleton.hideWidget('LogicFlowDesignerPlugin');
      skeleton.showArea('rightArea');
    }
    setShow(!show);
  };

  return <div onClick={toggleLogicDesigner}>111</div>;
};

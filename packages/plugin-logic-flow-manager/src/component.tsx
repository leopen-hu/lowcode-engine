import React, { FC, useState } from 'react';
import './index.css';

export interface LogicFlowManagerProps {
  showPlugin: (pluginName: string) => void;
  hidePlugin: (pluginName: string) => void;
}

export const LogicFlowManager: FC<LogicFlowManagerProps> = ({ showPlugin, hidePlugin }) => {
  const [show, setShow] = useState(false);

  const toggleLogicDesigner = () => {
    if (show) {
      showPlugin('lowcode.plugins.logicFlowDesigner');
      // skeleton.hideArea('rightArea');
    } else {
      hidePlugin('lowcode.plugins.logicFlowDesigner');
      // skeleton.showArea('rightArea');
    }
    setShow(!show);
  };

  return <div onClick={toggleLogicDesigner}>L</div>;
};

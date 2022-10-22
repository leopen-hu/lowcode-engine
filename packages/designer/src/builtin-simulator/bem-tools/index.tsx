import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { designerConfig } from '../../config';
import { BorderDetecting } from './border-detecting';
import { BorderContainer } from './border-container';
import { BuiltinSimulatorHost } from '../host';
import { BorderSelecting } from './border-selecting';
import BorderResizing from './border-resizing';
import { InsertionView } from './insertion';
import './bem-tools.less';
import './borders.less';

@observer
export class BemTools extends Component<{ host: BuiltinSimulatorHost }> {
  render() {
    const { host } = this.props;
    const { designMode } = host;
    const { scrollX, scrollY, scale } = host.viewport;
    if (designMode === 'live') {
      return null;
    }
    return (
      <div
        className="lc-bem-tools"
        style={{ transform: `translate(${-scrollX * scale}px,${-scrollY * scale}px)` }}
      >
        {!designerConfig.get('disableDetecting') && <BorderDetecting key="hovering" host={host} />}
        <BorderSelecting key="selecting" host={host} />
        {designerConfig.get('enableReactiveContainer') && (
          <BorderContainer key="reactive-container-border" host={host} />
        )}
        <InsertionView key="insertion" host={host} />
        <BorderResizing key="resizing" host={host} />
        {host.designer.bemToolsManager.getAllBemTools().map((tools) => {
          const ToolsCls = tools.item;
          return <ToolsCls key={tools.name} host={host} />;
        })}
      </div>
    );
  }
}

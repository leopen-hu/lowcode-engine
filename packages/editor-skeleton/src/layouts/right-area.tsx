import { Component, Fragment } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react';
import Area from '../area';
import Panel from '../widget/panel';

@observer
export default class RightArea extends Component<{ area: Area<any, Panel> }> {
  render() {
    const { area } = this.props;
    return (
      <div className={classNames('lc-right-area engine-tabpane', {
        'lc-area-visible': area.visible,
      })}
      >
        <Contents area={area} />
      </div>
    );
  }
}


@observer
class Contents extends Component<{ area: Area<any, Panel> }> {
  render() {
    const { area } = this.props;
    return (
      <Fragment>
        {area.container.items.map((item) => item.content)}
      </Fragment>
    );
  }
}

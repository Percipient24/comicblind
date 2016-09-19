'use strict';

import React, { PropTypes } from 'react';
import Panel from 'components/PanelComponent';

require('styles//Strip.scss');

class StripComponent extends React.Component {
  render() {
    const { id, date, panels } = this.props;
    return (
      <div className="strip-component">
    {
      panels.map((panel) => {
        console.log(panels.length);
        console.log(panel);
        return <div className="panel-wrap">
          <Panel
            key={panel.id}
            id = {panel.id}
            image = {panel.image}
            ratio = {panel.ratio}
            naturalWidth = {panel.naturalWidth}
            lines = {panel.lines}
          />
        </div>
      })
    }
      </div>
    );
  }
}

StripComponent.displayName = 'StripComponent';

// Uncomment properties you need
StripComponent.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.number,
  panels: PropTypes.arrayOf(PropTypes.shape(Panel.propTypes)),
};
// StripComponent.defaultProps = {};

export default StripComponent;

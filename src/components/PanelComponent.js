'use strict';

import React, { PropTypes } from 'react';
import Line from 'components/LineComponent';
import Dimensions from 'react-dimensions';

require('styles/Panel.scss');

class PanelComponent extends React.Component {
  render() {
    const { image, ratio, lines, containerWidth, naturalWidth } = this.props;
    const style = {
      paddingBottom: `${100*ratio}%`,
      backgroundImage: `url('${image}')`
    };
    return (
      <div
        className="panel-component"
        style={style}
      >
      {
        lines.map((line) => {
        return <Line
          key={line.id}
          id={line.id}
          speaker={line.speaker}
          text={line.text}
          format={line.format}
          width={containerWidth}
          naturalWidth={naturalWidth}
          ratio={ratio}
        />
      })
  }
      </div>
    );
  }
}

PanelComponent.displayName = 'PanelComponent';

// Uncomment properties you need
PanelComponent.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  ratio: PropTypes.number.isRequired,
  naturalWidth: PropTypes.number.isRequired,
  lines: PropTypes.arrayOf(PropTypes.shape(Line.propTypes))
};
// PanelComponent.defaultProps = {};

export default Dimensions()(PanelComponent)

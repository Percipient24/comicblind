'use strict';

import React, { PropTypes } from 'react';
import { SPEAKER_SCENE } from 'components/Main';

require('styles//Line.scss');

class LineComponent extends React.Component {
  computeStyles() {
    const { speaker, format, width, ratio, naturalWidth } = this.props;
    const left = speaker === SPEAKER_SCENE ? -10000 : format.x * width;
    return {
      left,
      top: format.y * (width * ratio),
      fontSize: format.size * (width / naturalWidth)
    };
  }
  render() {
    const { text, speaker } = this.props;
    const style = this.computeStyles();
    const classes = speaker === SPEAKER_SCENE ? 'line-component sight--hidden' : 'line-component';
    return (
      <div
        className={classes}
        style={style}
      >
      {text}
      </div>
    );
  }
}

LineComponent.displayName = 'LineComponent';

// Uncomment properties you need
LineComponent.propTypes = {
  id: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.number,
  naturalWidth: PropTypes.number,
  ratio: PropTypes.number,
  format: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired
  })
};
// LineComponent.defaultProps = {};

export default LineComponent;

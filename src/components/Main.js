require('styles/App.scss');

import React from 'react';
import Strip from 'components/StripComponent';

export const BASE_URL = '';
export const SPEAKER_SCENE = 'Scene';
const data = require('data/sampleComic.json');

class AppComponent extends React.Component {
  render() {
    console.log(data);
    const strip = data.strips[0];
    return (
      <div className="index">
        <h1>{strip.title}</h1>
        <Strip
          id={strip.id}
          date={strip.date}
          panels={strip.panels}
        />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

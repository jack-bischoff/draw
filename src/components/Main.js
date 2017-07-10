require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Canvas from './Canvas';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Canvas />
      </div>
    );
  }
}

App.defaultProps = {
};

require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <p className='uk-text-success'>UIkit is Working</p>
      </div>
    );
  }
}

App.defaultProps = {
};

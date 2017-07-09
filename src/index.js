require('uikit/dist/css/uikit.min.css');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import UIkit from 'uikit';

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));

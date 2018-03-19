/* global soundManager:false */

import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import sounds from 'sounds';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

soundManager.setup({ debugMode: false });

ReactDOM.render(
  <App sounds={sounds} />, 
  document.getElementById('root')
);

registerServiceWorker();

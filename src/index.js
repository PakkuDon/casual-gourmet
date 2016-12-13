require('normalize.css/normalize.css');
require('./stylesheets/app.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);

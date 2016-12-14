require('normalize.css/normalize.css');
require('./stylesheets/app.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';

ReactDOM.render(
  <Router history={hashHistory}>
    {routes}
  </Router>,
  document.querySelector('#app')
);

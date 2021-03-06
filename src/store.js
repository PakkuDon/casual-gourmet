import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';

export default createStore(
  rootReducer,
  {},
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(browserHistory)
  )
);

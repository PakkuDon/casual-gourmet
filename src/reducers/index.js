import { combineReducers } from 'redux';
import user from './user';
import recipe from './recipe';

const casualGourmetApp = combineReducers({
  user,
  recipe
});

export default casualGourmetApp;

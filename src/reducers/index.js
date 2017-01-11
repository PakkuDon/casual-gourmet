import { combineReducers } from 'redux';
import user from './user';
import recipe from './recipe';
import search from './search';

const casualGourmetApp = combineReducers({
  user,
  recipe,
  search
});

export default casualGourmetApp;

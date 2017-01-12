import { combineReducers } from 'redux';
import user from './user';
import recipe from './recipe';
import search from './search';
import profile from './profile';

const casualGourmetApp = combineReducers({
  user,
  recipe,
  search,
  profile
});

export default casualGourmetApp;

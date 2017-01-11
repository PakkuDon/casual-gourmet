import * as SearchAction from '../constants/search';

const search = (state = {}, action) => {
  switch (action.type) {
    case SearchAction.SEARCH_RECIPES_REQUEST:
      return Object.assign({}, state, {
        error: '',
        results: [],
        isLoading: true
      });
    case SearchAction.SEARCH_RECIPES_SUCCESS:
      return Object.assign({}, state, {
        results: action.results,
        isLoading: false
      });
    case SearchAction.SEARCH_RECIPES_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        isLoading: false
      });
    default:
      return state;
  }
}

export default search;

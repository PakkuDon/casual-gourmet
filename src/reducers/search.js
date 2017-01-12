import * as SearchAction from '../constants/search';

const search = (state = {}, action) => {
  switch (action.type) {
    case SearchAction.SEARCH_RECIPES_REQUEST:
      return {
        ...state,
        error: '',
        results: [],
        isLoading: true
      };
    case SearchAction.SEARCH_RECIPES_SUCCESS:
      return {
        ...state,
        results: action.results,
        isLoading: false
      };
    case SearchAction.SEARCH_RECIPES_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    default:
      return state;
  }
}

export default search;

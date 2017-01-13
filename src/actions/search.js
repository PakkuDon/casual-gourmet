import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';
import * as SearchAction from '../constants/search';

// Navigate to search page
export function showResults(query = '') {
  return dispatch => {
    dispatch(push(`/recipes/?name=${query}`));
  };
}

// Search recipes
export function searchRecipes(query = '') {
  return dispatch => {
    dispatch(searchRecipesRequest());
    return fetch(`/api/recipes/?name=${query}`)
      .then(res => res.json())
      .then(json => {
        dispatch(searchRecipesSuccess(json.recipes));
      })
      .catch(error => dispatch(searchRecipesFail(error)));
  };
}

function searchRecipesRequest() {
  return {
    type: SearchAction.SEARCH_RECIPES_REQUEST
  };
}

function searchRecipesSuccess(results) {
  return {
    type: SearchAction.SEARCH_RECIPES_SUCCESS,
    results
  };
}

function searchRecipesFail(error) {
  return {
    type: SearchAction.SEARCH_RECIPES_FAIL,
    error
  };
}

import fetch from 'isomorphic-fetch';
import jwtDecode from 'jwt-decode';
import { push } from 'react-router-redux';
import * as RecipeAction from '../constants/recipe';

// Add recipe
export function addRecipe(recipe) {
  return dispatch => {
    dispatch(addRecipeRequest());
    var token = localStorage.getItem('token');

    return fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        Object.assign({}, recipe, { token })
      )
    })
    .then(res => res.json())
    .then(json => {
      dispatch(addRecipeSuccess());
      dispatch(push(`/recipes/${json.recipe.id}`));
    })
    .catch(error => dispatch(addRecipeFail(error)));
  };
}

function addRecipeRequest() {
  return {
    type: RecipeAction.ADD_RECIPE_REQUEST
  };
}

function addRecipeSuccess() {
  return {
    type: RecipeAction.ADD_RECIPE_SUCCESS
  };
}

function addRecipeFail(error) {
  return {
    type: RecipeAction.ADD_RECIPE_FAIL,
    error
  };
}

// View recipe
export function getRecipe(id) {
  return dispatch => {
    dispatch(getRecipeRequest());

    fetch(`/api/recipes/${id}`)
      .then(res => res.json())
      .then(json => {
        dispatch(getRecipeSuccess(json.recipe));
        dispatch(push(`/recipes/${json.recipe.id}`));
      })
      .catch(error => dispatch(getRecipeFail(error)));
  }
}

function getRecipeRequest() {
  return {
    type: RecipeAction.GET_RECIPE_REQUEST
  };
}

function getRecipeSuccess(recipe) {
  return {
    type: RecipeAction.GET_RECIPE_SUCCESS,
    recipe
  };
}

function getRecipeFail(error) {
  return {
    type: RecipeAction.GET_RECIPE_FAIL,
    error
  };
}

// Review recipe
export function reviewRecipe(content, score, recipeId) {
  return dispatch => {
    var token = localStorage.getItem('token');
    dispatch(reviewRecipeRequest());
    return fetch('/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content,
        score,
        token,
        recipe_id: recipeId
      })
    })
    .then(res => res.json())
    .then(json => {
      dispatch(reviewRecipeSuccess());
      dispatch(getRecipe(recipeId));
    })
    .catch(error => dispatch(reviewRecipeFail(error)));
  }
}

function reviewRecipeRequest() {
  return {
    type: RecipeAction.ADD_REVIEW_REQUEST
  };
}

function reviewRecipeSuccess() {
  return {
    type: RecipeAction.ADD_REVIEW_SUCCESS
  };
}

function reviewRecipeFail(error) {
  return {
    type: RecipeAction.ADD_REVIEW_FAIL,
    error
  };
}

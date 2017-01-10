import * as RecipeAction from '../constants/recipe';

const recipe = (state = {}, action) => {
  switch (action.type) {
    case RecipeAction.ADD_RECIPE_REQUEST:
      return Object.assign({}, state, {
        error: '',
        isLoading: true
      });
    case RecipeAction.ADD_RECIPE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false
      });
    case RecipeAction.ADD_RECIPE_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        isLoading: false
      });
    case RecipeAction.GET_RECIPE_REQUEST:
      return Object.assign({}, state, {
        error: '',
        isLoading: true
      });
    case RecipeAction.GET_RECIPE_SUCCESS:
      return Object.assign({}, state, {
        recipe: action.recipe,
        isLoading: false
      });
    case RecipeAction.GET_RECIPE_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        isLoading: false
      });
    default:
      return state;
  }
}

export default recipe;

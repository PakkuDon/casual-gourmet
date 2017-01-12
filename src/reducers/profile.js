import * as ProfileAction from '../constants/profile';

const profile = (state = {}, action) => {
  switch (action.type) {
    case ProfileAction.GET_PROFILE_REQUEST:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case ProfileAction.GET_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoading: false
      };
    case ProfileAction.GET_PROFILE_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    default:
      return state;
  }
}

export default profile;

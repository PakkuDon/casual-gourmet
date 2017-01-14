import * as UserAction from '../constants/user';

const user = (state = {}, action) => {
  switch (action.type) {
    case UserAction.REGISTRATION_REQUEST:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case UserAction.REGISTRATION_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case UserAction.REGISTRATION_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case UserAction.LOGIN_REQUEST:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case UserAction.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case UserAction.LOGIN_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case UserAction.LOGOUT:
      return {};
    case UserAction.GET_USER_REQUEST:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case UserAction.GET_USER_SUCCESS:
      return {
        ...state,
        profile: action.user,
        isLoading: false
      };
    case UserAction.GET_USER_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case UserAction.BOOKMARK_REQUEST:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case UserAction.BOOKMARK_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case UserAction.BOOKMARK_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    default:
      return state;
  }
}

export default user;

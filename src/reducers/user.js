import * as UserAction from '../constants/user';

const user = (state = {}, action) => {
  switch (action.type) {
    case UserAction.LOGIN_REQUEST:
      return Object.assign({}, state, {
        error: '',
        isLoading: true
      });
    case UserAction.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false
      });
    case UserAction.LOGIN_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        isLoading: false
      });
    case UserAction.LOGOUT:
      return {};
    case UserAction.GET_USER_REQUEST:
      return Object.assign({}, state, {
        error: '',
        isLoading: true
      });
    case UserAction.GET_USER_SUCCESS:
      return Object.assign({}, state, {
        profile: action.user,
        isLoading: false
      });
    case UserAction.GET_USER_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        isLoading: false
      });
    default:
      return state;
  }
}

export default user;

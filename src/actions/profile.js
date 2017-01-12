import fetch from 'isomorphic-fetch';
import * as ProfileAction from '../constants/profile';

// Fetch user
export function getUser(id) {
  return dispatch => {
    dispatch(getUserRequest());
    return fetch(`/api/users/${id}`)
      .then(res => res.json())
      .then(json => {
        dispatch(getUserSuccess(json.user));
      })
      .catch(err => dispatch(getUserFail(err)));
  }
}

function getUserRequest() {
  return {
    type: ProfileAction.GET_PROFILE_REQUEST
  };
}

function getUserSuccess(user) {
  return {
    type: ProfileAction.GET_PROFILE_SUCCESS,
    user
  };
}

function getUserFail(error) {
  return {
    type: ProfileAction.GET_PROFILE_FAIL,
    error
  };
}

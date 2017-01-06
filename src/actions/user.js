import fetch from 'isomorphic-fetch';
import jwtDecode from 'jwt-decode';
import * as UserAction from '../constants/user';

// Log in
export function login(email, password) {
  return dispatch => {
    dispatch(loginRequest());

    return fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(res => res.json())
    .then(json => {
      var token = json.token;
      var userId = jwtDecode(token).user_id;
      dispatch(loginSuccess(token));
      dispatch(getUser(userId));
    })
    .catch(err => dispatch(loginFail(err)));
  }
}

function loginRequest() {
  return {
    type: UserAction.LOGIN_REQUEST
  };
}

function loginSuccess(token) {
  localStorage.setItem('token', token);
  return {
    type: UserAction.LOGIN_SUCCESS
  };
}

function loginFail(error) {
  return {
    type: UserAction.LOGIN_FAIL,
    error
  };
}

// Log out
export function logout() {
  localStorage.removeItem('token');
  return {
    type: UserAction.LOGOUT
  };
}

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
    type: UserAction.GET_USER_REQUEST
  };
}

function getUserSuccess(user) {
  return {
    type: UserAction.GET_USER_SUCCESS,
    user
  };
}

function getUserFail(error) {
  return {
    type: UserAction.GET_USER_FAIL,
    error
  };
}

// Restore session
export function loadSession() {
  var token = localStorage.getItem('token');
  var user;

  if (token) {
    token = jwtDecode(token);
    return getUser(token.user_id);
  }
  else {
    return {
      type: UserAction.LOAD_SESSION,
      user: null
    };
  }
}

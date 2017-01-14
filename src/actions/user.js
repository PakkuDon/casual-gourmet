import fetch from 'isomorphic-fetch';
import jwtDecode from 'jwt-decode';
import { push } from 'react-router-redux';
import * as UserAction from '../constants/user';

// Register
export function register(user) {
  return dispatch => {
    dispatch(registerRequest());

    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(json => {
      var token = json.token;
      var userId = jwtDecode(token).user_id;
      dispatch(registerSuccess(token));
      dispatch(getUser(userId));
      dispatch(push('/'));
    })
    .catch(error => dispatch(registerFail(error)));
  }
}

function registerRequest() {
  return {
    type: UserAction.REGISTRATION_REQUEST
  };
}

function registerSuccess(token) {
  localStorage.setItem('token', token);
  return {
    type: UserAction.REGISTRATION_SUCCESS
  };
}

function registerFail(error) {
  return {
    type: UserAction.REGISTRATION_FAIL,
    error
  };
}

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
      dispatch(push('/'));
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
  return dispatch => {
    localStorage.removeItem('token');
    dispatch(push('/'));
    return dispatch({
      type: UserAction.LOGOUT
    });
  }
}

// Fetch user
function getUser(id) {
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

// Bookmark recipe
export function bookmarkRecipe(recipeId) {
  return dispatch => {
    var token = localStorage.getItem('token');
    dispatch(bookmarkRecipeRequest());
    return fetch('/api/bookmarks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        recipe_id: recipeId,
        token
      })
    })
    .then(res => res.json())
    .then(json => {
      token = jwtDecode(token);
      dispatch(getUser(token.user_id));
      dispatch(bookmarkRecipeSuccess());
    })
    .catch(error => dispatch(bookmarkRecipeFail(error)));
  }
}

function bookmarkRecipeRequest() {
  return {
    type: UserAction.BOOKMARK_REQUEST
  };
}

function bookmarkRecipeSuccess() {
  return {
    type: UserAction.BOOKMARK_SUCCESS
  };
}

function bookmarkRecipeFail(error) {
  return {
    type: UserAction.BOOKMARK_FAIL,
    error
  };
}

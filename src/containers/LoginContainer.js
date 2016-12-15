import React from 'react';
import Login from '../components/Login';
import fetch from 'isomorphic-fetch';

export default class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(login) {
    fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(login)
    })
    .then(res => res.json())
    .then(json => {
      // TODO: Save token
      console.log(json);
      this.props.router.push('/');
    })
    .catch(err => {
      console.error(err);
    });
  }

  render() {
    return (
      <Login onLogin={this.handleLogin} />
    );
  }
}

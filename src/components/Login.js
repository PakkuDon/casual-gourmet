import React from 'react';

export default class Login extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    this.props.login(this.refs.email.value, this.refs.password.value);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div>
          <label htmlFor='email'>Email</label>
          <input id='email'
            ref='email'
            type='email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input id='password'
            ref='password'
            type='password' />
        </div>
        <button>Login</button>
      </form>
    );
  }
}

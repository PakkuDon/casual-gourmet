import React from 'react';

export default class Registration extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    this.props.register({
      username: this.refs.username.value,
      email: this.refs.email.value,
      first_name: this.refs.first_name.value,
      last_name: this.refs.last_name.value,
      password: this.refs.password.value
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div>
          <label htmlFor='username'>Username</label>
          <input id='username'
            ref='username'
            type='text' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input id='email'
            ref='email'
            type='email' />
        </div>
        <div>
          <label htmlFor='first_name'>First name</label>
          <input id='first_name'
            ref='first_name'
            type='text' />
        </div>
        <div>
          <label htmlFor='last_name'>Last name</label>
          <input id='last_name'
            ref='last_name'
            type='text' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input id='password'
            ref='password'
            type='password' />
        </div>
        <div>
          <label htmlFor='confirm_password'>Confirm password</label>
          <input id='confirm_password'
            ref='confirm_password'
            type='password' />
        </div>
        <button>Register</button>
      </form>
    );
  }
}

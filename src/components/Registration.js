import React from 'react';

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        confirm_password: ''
      }
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange() {
    this.setState({
      user: {
        username: this.refs.username.value,
        email: this.refs.email.value,
        first_name: this.refs.first_name.value,
        last_name: this.refs.last_name.value,
        password: this.refs.password.value,
        confirm_password: this.refs.confirm_password.value
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onRegister(this.state.user);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor='username'>Username</label>
          <input id='username' ref='username'
            onChange={this.onChange}
            type='text' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input id='email' ref='email'
            onChange={this.onChange}
            type='email' />
        </div>
        <div>
          <label htmlFor='first_name'>First name</label>
          <input id='first_name' ref='first_name'
            onChange={this.onChange}
            type='text' />
        </div>
        <div>
          <label htmlFor='last_name'>Last name</label>
          <input id='last_name' ref='last_name'
            onChange={this.onChange}
            type='text' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input id='password' ref='password'
            onChange={this.onChange}
            type='password' />
        </div>
        <div>
          <label htmlFor='confirm_password'>Confirm password</label>
          <input id='confirm_password' ref='confirm_password'
            onChange={this.onChange}
            type='password' />
        </div>
        <button>Register</button>
      </form>
    );
  }
}

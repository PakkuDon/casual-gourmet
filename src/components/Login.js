import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        email: '',
        password: ''
      }
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange() {
    this.setState({
      login: {
        email: this.refs.email.value,
        password: this.refs.password.value
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onLogin(this.state.login);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input id='email' ref='email'
            onChange={this.onChange}
            type='email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input id='password' ref='password'
            onChange={this.onChange}
            type='password' />
        </div>
        <button>Login</button>
      </form>
    );
  }
}

import React from 'react';
import Registration from '../components/Registration';
import fetch from 'isomorphic-fetch';

export default class RegistrationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.createUser = this.createUser.bind(this);
  }

  createUser(data) {
    // TODO: Validation
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
      this.props.authenticate(json.token);
      this.props.router.push('/');
    })
    // TODO: Show error
    .catch(err => {
      console.error(err);
    });
  }

  render() {
    return (
      <Registration onRegister={this.createUser} />
    );
  }
}

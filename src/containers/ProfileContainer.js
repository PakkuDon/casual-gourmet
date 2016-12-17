import React from 'react';
import fetch from 'isomorphic-fetch';
import Profile from '../components/Profile';

export default class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    fetch(`/api/users/${this.props.params.id}`)
      .then(res => res.json())
      .then(json => this.setState({ user: json.user }));
  }

  render() {
    return (
      <Profile user={this.state.user} />
    );
  }
}

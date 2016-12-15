import React from 'react';

export default class LogoutContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.logout();
    this.props.router.push('/');
  }

  render() {
    return (
      <div>Logging out...</div>
    );
  }
}

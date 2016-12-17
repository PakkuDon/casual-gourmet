import React from 'react';

export default class Profile extends React.Component {
  render() {
    var user = this.props.user;
    if (user) {
      return (
        <div>
          <h2>{`${user.first_name} ${user.last_name}`}</h2>
          <div>@{user.username}</div>
        </div>
      );
    }
    else {
      return <div></div>
    }
  }
}

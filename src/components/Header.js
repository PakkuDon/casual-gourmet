import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Recipe Box</h1>
        <nav>
          <ul>
            <li>Sign in</li>
            <li>Sign up</li>
          </ul>
        </nav>
      </header>
    );
  }
};

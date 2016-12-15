import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Recipe Box</h1>
        <nav>
          <ul>
            <li><Link to='/account/login'>Sign in</Link></li>
            <li><Link to='/account/register'>Sign up</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
};

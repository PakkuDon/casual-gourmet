import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <Link to='/'><h1 className='brand'>Casual Gourmet</h1></Link>
          {this.props.isAuthenticated ?
            (<ul>
              <li>Welcome</li>
              <li><Link to='/account/logout'>Log out</Link></li>
            </ul>)
          :
            (<ul>
              <li><Link to='/account/login'>Sign in</Link></li>
              <li><Link to='/account/register'>Sign up</Link></li>
            </ul>)
          }
        </nav>
      </header>
    );
  }
};

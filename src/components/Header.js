import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to='/'><h1 className='brand'>Casual Gourmet</h1></Link>
        <nav>
          <ul>
            <li>
              <Link to='/recipes'>Recipes</Link>
            </li>
          </ul>
          {this.props.user.profile ?
            (<ul>
              <li>
                <Link to={`/users/${this.props.user.profile.id}`}>{this.props.user.profile.username}</Link>
              </li>
              <li><Link to='/recipes/new'>Add Recipe</Link></li>
              <li><button onClick={this.props.logout}>Log out</button></li>
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

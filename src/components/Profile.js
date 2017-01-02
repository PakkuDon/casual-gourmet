import React from 'react';
import { Link } from 'react-router';

export default class Profile extends React.Component {
  render() {
    var user = this.props.user;
    if (user) {
      return (
        <div>
          <header>
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <div>@{user.username}</div>
          </header>
          <div>
            <h3>Recipes</h3>
            {user.recipes.map(recipe => {
              return (
                <div>
                  <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    else {
      return <div></div>
    }
  }
}

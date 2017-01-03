import React from 'react';
import { Link } from 'react-router';
import RecipeItem from './RecipeItem';

export default class Profile extends React.Component {
  render() {
    var user = this.props.user;
    if (user) {
      return (
        <div className='card'>
          <header>
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <div>@{user.username}</div>
          </header>
          <div>
            <h3>Recipes</h3>
            {user.recipes.map(recipe => {
              return (
                <RecipeItem key={recipe.id} recipe={recipe} />
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

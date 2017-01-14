import React from 'react';
import { Link } from 'react-router';
import RecipeItem from './RecipeItem';

export default class Profile extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.params.id);
  }

  render() {
    var user = this.props.profile.user;
    if (user) {
      return (
        <div className='card'>
          <header>
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <div>@{user.username}</div>
          </header>
          <div>
            <h3>Recipes</h3>
            {user.recipes.map(recipe => (
              <RecipeItem key={recipe.id} recipe={recipe} />
            ))}
          </div>
          <div>
            <h3>Bookmarks</h3>
            {user.bookmarks.map(bookmark => bookmark.recipe).map(recipe => (
              <RecipeItem key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      );
    }
    else {
      return <div></div>
    }
  }
}

import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

export default class Recipe extends React.Component {
  render() {
    var recipe = this.props.recipe;

    if (!recipe) {
      return (
        <div className='recipe-card'></div>
      );
    }
    else {
      return (
        <div className='card recipe-card'>
          <div className='recipe-image' style={{ backgroundImage: `url('${recipe.image_url}')` }}>
          </div>
          <h2>{recipe.name}</h2>
          <div className='details'>
            Posted on {moment(recipe.createdAt).format('MMMM Do YYYY')} by <Link to={`/users/${recipe.author.id}`}>{recipe.author.username}</Link>
          </div>
          <p>{recipe.description}</p>
          <h3>Instructions</h3>
          <div>
            {recipe.instructions}
          </div>
        </div>
      );
    }
  }
}

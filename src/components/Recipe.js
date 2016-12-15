import React from 'react';
import moment from 'moment';

export default class Recipe extends React.Component {
  render() {
    var recipe = this.props.recipe;
    return (
      <div className='recipe-card'>
        <h2>{recipe.name}</h2>
        <div>
          Posted on {moment(recipe.date_posted).format('MMMM Do YYYY')}
        </div>
        <p>{recipe.description}</p>
        <h3>Ingredients</h3>
        <h3>Method</h3>
        <div>
          {recipe.instructions}
        </div>
      </div>
    );
  }
}

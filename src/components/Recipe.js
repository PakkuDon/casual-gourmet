import React from 'react';

export default class Recipe extends React.Component {
  render() {
    var recipe = this.props.recipe;
    return (
      <div>
        <h2>{recipe.name}</h2>
        <div>
          Posted on {recipe.date_posted} by {recipe.author_id}
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

import React from 'react';
import RecipeItem from './RecipeItem';

export default class RecipeList extends React.Component {
  render() {
    var recipeItems = this.props.recipes.map(recipe => {
      return (
        <RecipeItem key={recipe.id} recipe={recipe} />
      );
    });

    return (
      <div className='recipe-list'>
        {recipeItems}
      </div>
    );
  }
}

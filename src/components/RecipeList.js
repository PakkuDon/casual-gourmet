import React from 'react';
import RecipeItem from './RecipeItem';

export default class RecipeList extends React.Component {
  componentDidMount() {
    this.props.searchRecipes(this.props.location.query.name);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.query.name !== this.props.location.query.name) {
      this.props.searchRecipes(nextProps.location.query.name);
    }
  }

  render() {
    var recipeItems;
    if (this.props.search.results) {
      recipeItems = this.props.search.results.map(recipe => {
        return (
          <RecipeItem key={recipe.id} recipe={recipe} />
        );
      });
    }

    return (
      <div className='recipe-list'>
        {recipeItems}
      </div>
    );
  }
}

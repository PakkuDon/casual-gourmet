import React from 'react';
import fetch from 'isomorphic-fetch';
import AddRecipe from '../components/AddRecipe';

export default class AddRecipeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.addRecipe = this.addRecipe.bind(this);
  }

  addRecipe(recipe) {
    var data = Object.assign({}, recipe, { token: this.props.token });
    fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
      this.props.router.push(`/recipes/${json.recipe_id}`);
    });
  }

  render() {
    return (
      <AddRecipe onSubmit={this.addRecipe} />
    );
  }
}

import React from 'react';
import Recipe from '../components/Recipe';
import fetch from 'isomorphic-fetch';

export default class RecipeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {}
    };
  }

  componentDidMount() {
    fetch(`/api/recipes/${this.props.params.id}`)
      .then(res => res.json())
      .then(json => this.setState({ recipe: json.recipe }));
  }

  render() {
    return (
      <Recipe recipe={this.state.recipe} />
    );
  }
}

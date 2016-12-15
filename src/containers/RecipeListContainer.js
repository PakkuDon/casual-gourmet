import React from 'react';
import RecipeList from '../components/RecipeList';
import fetch from 'isomorphic-fetch';

export default class RecipeListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    fetch(`/api/recipes/?name=${this.props.location.query.name || ''}`)
      .then(res => res.json())
      .then(json => this.setState({ recipes: json.recipes }));
  }

  render() {
    return (
      <RecipeList recipes={this.state.recipes} />
    );
  }
}

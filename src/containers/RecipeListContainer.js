import React from 'react';
import RecipeList from '../components/RecipeList';
import fetch from 'isomorphic-fetch';

export default class RecipeListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };

    this.getRecipes = this.getRecipes.bind(this);
  }

  componentDidMount() {
    this.getRecipes(this.props.location.query.name);
  }

  componentWillReceiveProps(nextProps) {
    this.getRecipes(nextProps.location.query.name);
  }

  getRecipes(query = '') {
    fetch(`/api/recipes/?name=${query}`)
      .then(res => res.json())
      .then(json => this.setState({ recipes: json.recipes }));
  }

  render() {
    return (
      <RecipeList recipes={this.state.recipes} />
    );
  }
}

import React from 'react';
import Home from '../components/Home';

export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(query) {
    this.props.router.push('/recipes');
  }

  render() {
    return (
      <Home onSubmit={this.onSubmit} />
    );
  }
}

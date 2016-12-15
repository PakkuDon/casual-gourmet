import React from 'react';
import Home from '../components/Home';

export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(query) {
    this.props.router.push({ pathname: '/recipes', search: `?name=${query}` });
  }

  render() {
    return (
      <Home onSubmit={this.onSubmit} />
    );
  }
}

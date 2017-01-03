import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.refs.q.value);
  }

  render() {
    return (
      <section id='search-page'>
        <h2>Search recipes</h2>
        <form onSubmit={this.onSubmit}>
          <input id='q' ref='q' type='text' />
          <button>Search</button>
        </form>
      </section>
    );
  }
}

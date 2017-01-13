import React from 'react';

export default class Home extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    this.props.showResults(this.refs.q.value);
  }

  render() {
    return (
      <section id='search-page'>
        <h2>Search recipes</h2>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input id='q' ref='q' type='text' />
          <button>Search</button>
        </form>
      </section>
    );
  }
}

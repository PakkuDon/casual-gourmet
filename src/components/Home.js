import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <section>
        <form>
          <input id='q' type='text' />
          <button>Search</button>
        </form>
      </section>
    );
  }
}

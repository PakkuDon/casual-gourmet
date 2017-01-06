import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class App extends React.Component {
  componentDidMount() {
    this.props.loadSession();
  }

  render() {
    return (
      <div id='app'>
        <Header {...this.props} />
        <main>
          {React.cloneElement(this.props.children, this.props)}
        </main>
        <Footer />
      </div>
    );
  }
}

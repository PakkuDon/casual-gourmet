import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };

    this.authenticate = this.authenticate.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    var token = localStorage.getItem('token');
    if (token) {
      this.authenticate(token);
    }
  }

  // Set user token and authentication flag
  authenticate(token) {
    this.setState({
      isAuthenticated: true
    });
    localStorage.setItem('token', token);
  }

  logout() {
    this.setState({
      isAuthenticated: false
    });
    localStorage.removeItem('token');
  }

  render() {
    return (
      <div id='app'>
        <Header isAuthenticated={this.state.isAuthenticated} />
        <main>
          {this.props.children && React.cloneElement(this.props.children, {
            isAuthenticated: this.state.isAuthenticated,
            authenticate: this.authenticate,
            logout: this.logout
          })}
        </main>
        <Footer />
      </div>
    );
  }
}

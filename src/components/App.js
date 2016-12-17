import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    };

    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    var token = localStorage.getItem('token');
    if (token) {
      this.authenticate(token);
    }
  }

  isAuthenticated() {
    return !!this.state.token;
  }

  // Set user token and authentication flag
  authenticate(token) {
    this.setState({
      token: token
    });
    localStorage.setItem('token', token);
  }

  logout() {
    this.setState({
      token: ''
    });
    localStorage.removeItem('token');
  }

  render() {
    return (
      <div id='app'>
        <Header isAuthenticated={this.isAuthenticated} />
        <main>
          {this.props.children && React.cloneElement(this.props.children, {
            isAuthenticated: this.state.isAuthenticated,
            authenticate: this.authenticate,
            logout: this.logout,
            token: this.state.token
          })}
        </main>
        <Footer />
      </div>
    );
  }
}

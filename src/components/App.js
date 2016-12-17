import React from 'react';
import fetch from 'isomorphic-fetch';
import jwtDecode from 'jwt-decode';
import Header from './Header';
import Footer from './Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      user: null
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

  // Set user token
  authenticate(token) {
    this.setState({
      token: token
    });

    var decoded = jwtDecode(token);

    fetch(`/api/users/${decoded.user_id}`)
      .then(res => res.json())
      .then(json => this.setState({ user: json.user }));

    localStorage.setItem('token', token);
  }

  logout() {
    this.setState({
      token: '',
      user: null
    });
    localStorage.removeItem('token');
  }

  render() {
    return (
      <div id='app'>
        <Header isAuthenticated={this.isAuthenticated} user={this.state.user} />
        <main>
          {this.props.children && React.cloneElement(this.props.children, {
            isAuthenticated: this.isAuthenticated,
            user: this.state.user,
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

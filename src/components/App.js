import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      token: ''
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
      isAuthenticated: true,
      token: token
    });
    localStorage.setItem('token', token);
  }

  logout() {
    this.setState({
      isAuthenticated: false,
      token: ''
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
            logout: this.logout,
            token: this.state.token
          })}
        </main>
        <Footer />
      </div>
    );
  }
}

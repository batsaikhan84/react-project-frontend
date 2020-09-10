import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home';
import Registration from './userAuthentication/UserRegistration';
import Login from './userAuthentication/UserLogin'
import Profile from './Profile';
import { fetchCurrentUser } from '../actions/userActions'
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.fetchCurrentUser()
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/profile' render={props => (<Profile {...props} userProps={this.props}/> )} />
            <Route exact path='/' render={props => (<Home {...props} /> )} />
            <Route exact path='/registration' render={props => (<Registration {...props} /> )} />
            <Route exact path='/login' render={props => (<Login {...props} /> )} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    user: state.user,
    loading: state.loading
  })
}

export default connect(mapStateToProps, { fetchCurrentUser })(App);

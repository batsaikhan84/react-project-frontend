import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home';
import Registration from './userAuthentication/UserRegistration';
import Login from './userAuthentication/UserLogin'
import Profile from './Profile';
import { fetchCurrentUser } from '../actions/userActions'
import { connect } from 'react-redux';
import Navbar from './Navbar';
import '../App.css'

class App extends Component {
  componentDidMount() {
    this.props.fetchCurrentUser()
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Navbar userData={this.props}/>
          <Switch>
            <Route exact path='/profile' render={props => (<Profile {...props} userProps={this.props}/> )} />
            <Route exact path='/' render={props => (<Home {...props} userProps={this.props}/> )} />
            <Route exact path='/registration' component={Registration}/>
            <Route exact path='/login' component={Login}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    user: state.user,
    loading: state.loading,
    logged_in: state.logged_in
  })
}

export default connect(mapStateToProps, { fetchCurrentUser })(App);

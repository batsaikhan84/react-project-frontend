import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Routes/Home';
import Registration from './users/UserRegistration';
import Login from './users/UserLogin'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/registration' component={Registration}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

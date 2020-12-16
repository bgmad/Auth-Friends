import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import FriendsList from './pages/FriendsList';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>

        <Switch>
          <PrivateRoute exact path='/home' component={Home}/>
          <PrivateRoute exact path='/home/friends' component={FriendsList}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

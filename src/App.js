
import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/home/home'
import Signin from './components/authentication/Signin'
import Task from './components/Task'
import User from './components/User'

function App() {

  // Check if LoggedIn

  const [isAuthenticated, changeAuthentication] = useState(false)


  // Create User  
  const [user, CreateUser] = useState({
    username: "",
    password: ""
  })


  return (<Fragment>


    <Router>
      <Switch>
        <Route exact path='/signin'><Signin createUser={CreateUser} changeAuthentication={changeAuthentication} history={useHistory} /> </Route>
        <Route exact path='/'> <Home history={useHistory} isAuthenticated={isAuthenticated} /></Route>
        <Route exact path='/task'> <Task isAuthenticated={isAuthenticated} history={useHistory} /></Route>
        <Route exact path='/user'><User user={user} logout={changeAuthentication} history={useHistory} changePassword={CreateUser} /> </Route>
      </Switch>
    </Router>
  </Fragment>
  );
}

export default App;

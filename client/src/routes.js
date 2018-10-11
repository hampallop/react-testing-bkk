import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import Signup from './screens/Signup'

import {AuthContextProvider} from './context/auth'

export default (
  <AuthContextProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  </AuthContextProvider>
)

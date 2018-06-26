import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import Signup from './screens/Signup'

import { AuthContextProvider } from './context/auth'

export default (
  <AuthContextProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exaxt path="/login" component={Login} />
        <Route exaxt path="/signup" component={Signup} />
        {/* <Route path="*" component={PageNotFound} /> */}
      </Switch>
    </Router>
  </AuthContextProvider>
)

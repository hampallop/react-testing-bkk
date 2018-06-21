import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './screens/Login'
import Signup from './screens/Signup'

// Module root components
import Home from './screens/Home'

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exaxt path="/login" component={Login} />
      <Route exaxt path="/signup" component={Signup} />
      {/* <Route path="*" component={PageNotFound} /> */}
    </Switch>
  </Router>
)

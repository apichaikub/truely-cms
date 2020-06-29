import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ROUTER_PATH } from './enum'
import ProtectedRoute from './ProtectedRoute'
import Login from './views/Login'
import Products from './views/Products'
import Users from './views/Users'

const {
  ENUM: {
    HOME,
    LOGIN,
    PRODUCTS,
    USERS,
  },
} = ROUTER_PATH

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME} component={Login} />
        <Route exact path={LOGIN} component={Login} />
        <ProtectedRoute exact path={PRODUCTS} component={Products} />
        <ProtectedRoute exact path={USERS} component={Users} />
      </Switch>
    </Router>
  )
}

export default Routers

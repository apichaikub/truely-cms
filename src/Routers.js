import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ROUTER_PATH, ROLE_USER } from './enum'
import ProtectedRoute from './ProtectedRoute'
import Login from './views/Login'
import Products from './views/Products'
import Users from './views/Users'

const { ENUM: ROUTER } = ROUTER_PATH
const { ENUM: ROLE } = ROLE_USER

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTER.HOME} component={Login} />
        <Route exact path={ROUTER.LOGIN} component={Login} />
        <ProtectedRoute exact path={ROUTER.PRODUCTS} component={Products} roles={[ROLE.ADMIN]} />
        <ProtectedRoute exact path={ROUTER.USERS} component={Users} roles={[ROLE.ADMIN]} />
      </Switch>
    </Router>
  )
}

export default Routers

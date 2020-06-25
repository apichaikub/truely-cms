import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ProtectedRoute from './ProtectedRoute'
import Login from './views/Login'
import Products from './views/Products'
import Users from './views/Users'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/products" component={Products} />
        <ProtectedRoute exact path="/users" component={Users} />
      </Switch>
    </Router>
  )
}

export default App

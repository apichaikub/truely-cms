import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './views/Login'
import Products from './views/Products'
import Users from './views/Users'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/products">
          <Products/>
        </Route>
        <Route exact path="/users">
          <Users/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App

import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { ROUTER_PATH } from './enum'

const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
  const authState = useSelector(state => state.auth)
  const meState = useSelector(state => state.me)

  if(!authState.loggedin) {
    return <Redirect to={ROUTER_PATH.ENUM.LOGIN} />
  }

  if(!roles.includes(meState.data.role)) {
    return <Redirect to={ROUTER_PATH.ENUM.LOGIN} />
  }

  return (
    <Route { ...rest }
      render={
        props => (
          <Component { ...rest } { ...props } /> 
        )
      }
    />
  )
}

export default ProtectedRoute;
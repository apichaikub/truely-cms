import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ROUTER_PATH } from './enum'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useSelector(state => state.auth)

  if(!isLoggedIn) {
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
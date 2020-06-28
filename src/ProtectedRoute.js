import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useSelector(state => state.auth)

  if(!isLoggedIn) {
    return <Redirect to='/login' />
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
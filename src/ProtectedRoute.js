import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { ROUTER_PATH, META_ROUTE } from './enum'

const { ENUM: PATH } = ROUTER_PATH
const { ENUM: META } = META_ROUTE

const ProtectedRoute = ({ component: Component, meta, ...rest }) => {
  const authState = useSelector(state => state.auth)
  const meState = useSelector(state => state.me)

  if(meta[META.REQUIRED_AUTH] === true && !authState.loggedin) {
    return <Redirect to={PATH.LOGIN} />
  }

  if(meta[META.ROLES] && !meta[[META.ROLES]].includes(meState.data.role)) {
    return <Redirect to={PATH.LOGIN} />
  }

  return <Route component={Component} { ...rest } />
}

export default ProtectedRoute;
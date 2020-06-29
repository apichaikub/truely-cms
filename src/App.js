import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Redirect } from "react-router-dom"
import { meActions } from './store/actions'
import { ROUTER_PATH } from './enum'
import storage from './storages'
import Routers from './Routers'

const App = () => {
  const dispatch = useDispatch()
  const authState = useSelector(state => state.auth)
  const meState = useSelector(state => state.me)

  // this user has already been authenticated and not logged in. by getting access token from local storage.
  // because every time page is refresh, states will be cleared. so, we have to get user info every time when app is opened.
  // note: when get user info success `isLoggedIn` will be true
  const isAuthenticatedBefore = storage.getAccessToken() && !authState.isLoggedIn

  useEffect(() => {
    if(isAuthenticatedBefore) {
      dispatch(meActions.getMe())
    }
  }, [isAuthenticatedBefore, dispatch])

  // display loading page if we still loading user informations
  if(isAuthenticatedBefore || meState.isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  // if getting an error then redirect to login pages
  if(meState.error) {
    return <Redirect to={ROUTER_PATH.ENUM.LOGIN} />
  }

  return (
    <Routers/>
  )
}

export default App

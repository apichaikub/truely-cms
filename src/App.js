import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ROUTER_PATH, META_ROUTE } from './enum'
import { meActions } from './store/actions'
import routes from './routes'
import ProtectedRoute from './ProtectedRoute'
import './assets/scss/style.scss'

const { ENUM: PATH } = ROUTER_PATH
const { ENUM: META } = META_ROUTE

const App = () => {
  const dispatch = useDispatch()
  const authState = useSelector(state => state.auth)
  const meState = useSelector(state => state.me)

  // this user has already been authenticated and not logged in. by getting access token from store `state.auth`.
  // because every time page is refresh, states will be cleared. so, we have to get user info every time when app is opened.
  // note: when get user info success `loggedin` will be true
  const { data: { accessToken }, loggedin } = authState
  const isAuthenticatedBefore = accessToken && !loggedin

  useEffect(() => {
    if(isAuthenticatedBefore) {
      dispatch(meActions.requestGetMe())
    }
  }, [isAuthenticatedBefore, dispatch])

  // display loading page if we still loading user informations
  if(isAuthenticatedBefore || meState.loading) {
    return (
      <div>Loading...</div>
    )
  }

  // if getting an error then redirect to login pages
  if(meState.error) {
    return <Redirect to={PATH.LOGIN} />
  }

  return (
    <Router>
      <Switch>
        {routes.map(({ meta = {}, ...rest }, index) => (
          meta[META.REQUIRED_AUTH] === true
          ? <ProtectedRoute key={index} meta={meta} {...rest} />
          : <Route key={index} {...rest} />
        ))}
      </Switch>
    </Router>
  )
}

export default App

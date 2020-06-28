import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authActions, meActions } from '../store/actions'

const Login = (props) => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const me = useSelector(state => state.me)

  useEffect(() => {
    dispatch(meActions.getMe())
  }, [dispatch])

  return (
    <div className="App">
      Login Page
      <button onClick={() => dispatch(authActions.getTokens({ username: 'admin1', password: '123456' }))}>
        Click
      </button>
      <pre>{JSON.stringify(auth)}</pre>
      <pre>{JSON.stringify(me)}</pre>
      <pre>{JSON.stringify(process.env)}</pre>
    </div>
  )
}

export default Login
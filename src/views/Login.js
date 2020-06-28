import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authActions, meActions } from '../store/actions'

const Login = (props) => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const me = useSelector(state => state.me)
  
  return (
    <div className="App">
      Login Page
      <br/>
      <br/>
      <button onClick={() => dispatch(authActions.getTokens({ username: 'admin1', password: '123456' }))}>
        Get Tokens
      </button>
      <br/>
      <br/>
      <button onClick={() => dispatch(meActions.getMe())}>
        Get Me
      </button>
      <br/>
      <pre>{JSON.stringify(auth)}</pre>
      <pre>{JSON.stringify(me)}</pre>
      <pre>{JSON.stringify(process.env)}</pre>
      <Link to="/products">Products</Link> <br/>
      <Link to="/users">Users</Link>
    </div>
  )
}

export default Login
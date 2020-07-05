import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { authActions } from '../store/actions'
import { ROUTER_PATH } from '../enum'
import FormLogin from '../components/Dump/FormLogin'

const Login = () => {
  const dispatch = useDispatch()
  const authState = useSelector(state => state.auth)
  const { control, errors, handleSubmit } = useForm()
  const [submited, setSubmit] = useState(false)

  // handler function
  const onSubmit = ({ username, password }) => {
    setSubmit(true)
    dispatch(authActions.requestGetTokens({username, password}))
  }

  useEffect(() => {
    if(authState.error) {
      setSubmit(false)
    }
  }, [authState])

  // if user is already logged in, then redirect to product pages
  if(authState.loggedin) {
    return <Redirect to={ROUTER_PATH.ENUM.PRODUCTS} />
  }

  return (
    <FormLogin
      authState={authState}
      control={control}
      errors={errors}
      submited={submited}
      onSubmit={handleSubmit(onSubmit)}
    />
  )
}

export default Login
import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import serviceApi from '../services/api'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [isLoading, setLoading] = useState(true);
  const [, setMe] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    serviceApi.getMe().then(
      ({ data: { me } }) => {
        setIsLoggedIn(true)
        setMe(me)
        setErrorMessage(null)
        setLoading(false)
      },
      (error) => {
        setIsLoggedIn(false)
        setMe(null)
        setErrorMessage(error.message)
        setLoading(false)
      }
    );
  }, []);

  if(isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  if(errorMessage || !isLoggedIn) {
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
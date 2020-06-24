import React from 'react'
import { Redirect } from 'react-router-dom'

const Layout = (props) => {
  const Content = props.children
  const isLoggedIn = false
  
  if(!isLoggedIn) {
    return (
      <Redirect to="/login" />
    )
  }

  return (
    <div>
      <div>header</div>
      <div>Sidebar</div>
      <div>{ Content }</div>
      <div>footer</div>
    </div>
  )
}

export default Layout
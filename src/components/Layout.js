import React from 'react'

const Layout = ({ children: Content }) => {
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
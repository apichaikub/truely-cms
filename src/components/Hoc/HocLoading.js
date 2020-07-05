import React from 'react'

const HocLoading = (WrappedComponent, LoadingComponent) => (props) => (
  <WrappedComponent {...props}>
    { !props.loading ? props.children :
      <LoadingComponent />
    }
  </WrappedComponent>
)

export default HocLoading
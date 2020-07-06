import React from 'react'
import { CButton } from '@coreui/react'
import HocLoading from '../Hoc/HocLoading'
import BaseLoadingSpinner from './BaseLoadingSpinner'

const WrapperComponent = ({ text = "", loading = false, children, ...rest }) => (
  <CButton disabled={loading} {...rest}>
    { text || children }
  </CButton>
)

const LoadingComponent = () => (
  <BaseLoadingSpinner size="sm" />
)

const BaseButton = HocLoading(WrapperComponent, LoadingComponent)

export default BaseButton

// // Wrapper Component
// const BaseButton = ({ loading = false, children, ...rest }) => (
//   <CButton disabled={ loading } { ...rest }>
//     { !loading ? children :
//       <div className="spinner-border spinner-border-sm" role="status">
//         <span className="sr-only">Loading...</span>
//       </div>
//     }
//   </CButton>
// )

// export default BaseButton
import React from 'react'

const BaseLoadingSpinner = (props) => {
  const { className = '', type = 'border', size = 'sm', color = null, width = null, height = null } = props
  const _className = `${className} spinner-${type} spinner-${type}-${size} ${color ? `text-${color}` : ``}`
  const style = { width, height }

  return (
    <div className={_className} style={style} role="status">
      <span className="sr-only">
        Loading...
      </span>
    </div>
  )
}

export default BaseLoadingSpinner

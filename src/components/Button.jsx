import React, {useState} from 'react'
import classnames from 'classnames'

function Button({children, className, ...rest}) {
  let allClasses = classnames(className)

  return (
    <button className={allClasses} {...rest} >{children}</button>
  )
}

export default Button

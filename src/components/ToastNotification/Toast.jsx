import React from 'react'




function Toast({msg, type}) {
  return (
      <div className={`toast ${type}`}>{msg}</div>
  )
}

export default Toast

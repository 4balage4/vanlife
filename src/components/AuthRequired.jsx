import React from 'react'
import {Outlet, Navigate, useLocation} from 'react-router'

function AuthRequired() {
  const isLoggedIn = localStorage.getItem('loggedIn')
  const location = useLocation()

  if (!isLoggedIn) {
    return <Navigate
      to="login"
      state={{message: 'You must login first!',
        from: location.pathname
      }}
      replace={true} // replace would be also enough
      />
  }
  return (
    <Outlet/>
  )
}

export default AuthRequired

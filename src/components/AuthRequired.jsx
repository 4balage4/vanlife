import React from 'react'
import {Outlet, Navigate, useLocation} from 'react-router'

function AuthRequired() {
  const isLoggedIn = true
  // if you want the log in to work just replace the "true" with the line above
  // localStorage.getItem('loggedIn')
  // user: b@b.com, pw: p123
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

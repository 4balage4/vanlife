import React from 'react'
import {NavLink, Outlet} from 'react-router'

function HostLayout() {

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}

  return (
    <>
    <nav className='host-menu'>
      <NavLink end style={({isActive})=> isActive ? activeStyles : null}className="host-menu-item" to=".">dashboard</NavLink>
      <NavLink style={({isActive})=> isActive ? activeStyles : null}className="host-menu-item" to="income">income</NavLink>
      <NavLink style={({isActive})=> isActive ? activeStyles : null}className="host-menu-item" to="reviews">reviews</NavLink>
      <NavLink style={({isActive})=> isActive ? activeStyles : null}className="host-menu-item" to="vans">vans</NavLink>
    </nav>
      <Outlet/>
    </>
  )
}

export default HostLayout

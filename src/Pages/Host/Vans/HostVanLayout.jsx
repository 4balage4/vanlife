import React from 'react'
import {NavLink, Outlet} from 'react-router'

function HostVanLayout({ name, price, imageUrl, type, description, id }) {


  const activeStyles = {
    textDecoration:'underline',
    color: '#161616',
    fontWeight: 'bold'
  }

  return (
    <div className="host-vancard-container">
    <div className="host-vancard-header-container">
       <img src={imageUrl} alt={name} />
      <div className="host-vancard-text">
        <p className={`host-van-type ${type}`}>{type}</p>
        <h2>{name}</h2>
        <p><span>${price}</span>/day</p>
      </div>
    </div>
  <nav className="host-vancard-menu">
      <NavLink end style={({isActive})=> isActive ? activeStyles : null} className="host-vancard-button" to=".">Details</NavLink>
      <NavLink style={({isActive})=> isActive ? activeStyles : null} className="host-vancard-button" to="pricing">Pricing</NavLink>
      <NavLink style={({isActive})=> isActive ? activeStyles : null} className="host-vancard-button" to="photos">Photos</NavLink>
  </nav>
    <Outlet context={{name, price, imageUrl, type, description, id}}/>
  </div>
  )
}

export default HostVanLayout

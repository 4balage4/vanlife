import React from 'react'
import {useOutletContext} from 'react-router'

function Pricing() {
  const {price} = useOutletContext()
  return (
    <div>
      <p><strong>${price}</strong><span>/day</span></p>
    </div>
  )
}

export default Pricing

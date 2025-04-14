import React from 'react'
import {useOutletContext} from 'react-router'

function Info() {

  const {name, type, description} = useOutletContext()

  return (
    <div>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Category:</strong>{type}</p>
      <p><strong>Visibility: </strong>Public</p>
      {/* <p><strong>Price:</strong> ${price}/day</p> */}
    </div>
  )
}

export default Info

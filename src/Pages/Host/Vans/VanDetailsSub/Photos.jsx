import React from 'react'
import {useOutletContext} from 'react-router'

function Photos() {
  const {name, imageUrl} = useOutletContext()
  return (
    <div>
      <img src={imageUrl} alt={name} height="75px" width="75px" />
    </div>
  )
}

export default Photos

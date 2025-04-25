import React from 'react'
import {useOutletContext} from 'react-router'
import { IoIosAdd } from "react-icons/io";
import {useToast} from '../../../../components/ToastNotification/ToastContext'

function Photos() {
  const {addToast} = useToast()
  const {name, imageUrl} = useOutletContext()
  return (
    <div className='sub-photos-container'>
      <img src={imageUrl} alt={name} height="75px" width="75px" />
      <div className='add-more-photos'><IoIosAdd size="50px" color="gray" onClick={() => {addToast('Adding photo is not possible', 'alert')}} /></div>
    </div>
  )
}

export default Photos

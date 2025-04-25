
// I create a context for the toast.

import {createContext, useState, useContext } from 'react'
import Toast from './Toast'
import React from 'react'

const ToastContext = createContext()

function ToastProvider({children}) {
    const [toasts, setToasts] = useState([])

  const addToast = (message, type) => {
    const id = Date.now()
     setToasts(prev => [...prev, {id, message, type}])

     setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id))
     }, 3000)
  }



  return (
    <ToastContext.Provider value={{addToast}}>
      {children}
    <div className='toast-container'>
      {toasts.map((toast) => {
        return (<Toast msg={toast.message} key={toast.id} type={toast.type}/>)
      })}
    </div>
      </ToastContext.Provider>
  )
}

export default ToastProvider

// exporting the function
export const useToast = () => useContext(ToastContext)

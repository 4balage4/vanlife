
import {createContext, useState, useContext } from 'react'
import Toast from './Toast'
import React from 'react'


// creating a context for the toast.
const ToastContext = createContext()


// Getting the children prop and rendering it in the component. Rendering everything what is inside the ToastProvider component in the main file.
function ToastProvider({children}) {

  // this will be an array of Toast objects
    const [toasts, setToasts] = useState([])


    // This function will inject the Toast object into this array.
    // The function will be called in the component of choice
    // addToast('you can't click to this button', 'neutral')
  const addToast = (message, type) => {
    // adding id with the date.now value
    const id = Date.now()
    // keeping the prev state of the array and injecting the new Toast: {id, message, type}
     setToasts(prev => [...prev, {id, message, type}])

    //  setting a 3sec timeout with a filter, where the toast will be removed.
     setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id))
     }, 3000)
  }



  // adding the add toast function as a value.
  return (
    <ToastContext.Provider value={{addToast}}>
      {/* every children will have this state */}
      {children}
    <div className='toast-container'>
      {/* rendering the Toasts from the toasts array */}
      {toasts.map((toast) => {
        return (<Toast msg={toast.message} key={toast.id} type={toast.type}/>)
      })}
    </div>
      </ToastContext.Provider>
  )
}

export default ToastProvider

// custom hook
// simplifying the imports by this.
// without this would look like:
// here export {ToastContext}
// new file: imports (ToastContext, useContext), {addToast} = useContext(ToastContext)

export const useToast = () => useContext(ToastContext)

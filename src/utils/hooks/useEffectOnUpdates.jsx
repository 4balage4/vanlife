import {useEffect, useRef} from 'react'


function useEffectOnUpdates(effectFunction, deps) {
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      effectFunction()
    } else {
      firstRender.current = false
    }
  }, deps)

}

export default useEffectOnUpdates

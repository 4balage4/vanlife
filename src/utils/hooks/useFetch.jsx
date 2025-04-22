// this hook is for refactor the fetch requests, so I dont need to repeat myself.
// i want to render a loading state and an error state in every component where i fetch.
// I know, could be better to have a global state

import {useEffect, useState} from "react";

const useFetch = (fetchFunc, param ) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      // sets the load screen to true
      setLoading(true)
      try {
        const response = await fetchFunc(param)
        console.log(response.vans)
        if (response) {
          setData(response)
        }
      } catch (err) {
        console.log('There was an error!', err)
        setError(err)
      } finally {
        setLoading(false);
      }
    }
  load()

  
  if (param) {
    load()
  }
}, [fetchFunc, param])
// returns the result
return {data, loading, error}
}

export default useFetch


const fetchVans = async () =>  {
  try {
    const response = await fetch('api/vans')
    if(!response.ok) {
      throw new Error('HTTP error! status: ', response.status)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('failed to fetch', error)
    throw error
  }
}

export default fetchVans

const fetchHostVans = async () =>  {
  try {
    const response = await fetch('/api/host/vans')
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('failed to fetch HostVans', error)
    throw error
  }
}

export default fetchHostVans



// using the absoulte path -> /api/host/vans instead of the relative, because
// if I am using the relative, the fetch from /host/api/host/vans. this route does not exist..

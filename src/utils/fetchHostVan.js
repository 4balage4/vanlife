const fetchHostVan = async (id) =>  {
  try {
    const response = await fetch(`/api/host/vans/${id}`)
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('failed to fetch the Host Van', error)
    throw error
  }
}

export default fetchHostVan

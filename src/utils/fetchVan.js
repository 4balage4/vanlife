
const fetchVan = async (id) =>  {
  try {
    const response = await fetch(`/api/vans/${id}`)
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('failed to fetch', error)
    throw error
  }
}

export default fetchVan

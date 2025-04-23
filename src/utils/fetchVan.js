import db from '../../firebaseConfig'
import {doc, getDoc} from 'firebase/firestore/lite'


const fetchVan = async (id) => {
  try {
    // We are getting a SINGLE entry so we are using the doc. the collection and the id
      const vanCollectionRef = doc(db, 'vans', id)
      // again: single entry so getDoc
      const vanSnapshot = await getDoc(vanCollectionRef)
      // based on my data structure, it is an object so I just format it correctly.
      const van = {id: vanSnapshot.id, ...vanSnapshot.data()}
      // console.log(van)
      return van
    } catch (err) {
    console.log('failed to fetch a Van' ,err)
  }
}





// const fetchVan = async (id) =>  {
//   try {
//     const response = await fetch(`/api/vans/${id}`)
//     if(!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`)
//     }
//     const data = await response.json()
//     return data
//   } catch (error) {
//     console.error('failed to fetch', error)
//     throw error
//   }
// }

export default fetchVan

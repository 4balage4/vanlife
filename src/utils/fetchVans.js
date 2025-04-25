import db from '../../firebaseConfig'
import {collection, getDocs} from 'firebase/firestore/lite'


const fetchVans = async () => {
  try {
    // collection we want to read from. this mirror what is in my firestore database.
    const vansCollectionRef = collection(db, 'vans');
    // fetches thedocuments in the vans collection. returns a snapshot.
    const vansSnapshot = await getDocs(vansCollectionRef)
    console.timeLog(vansSnapshot)
    // processing the raw data
    // the docs returned with and ID and te rest of the data
    // so here I map over it and I join the data to one object
    const vans = vansSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    return vans

  } catch (err) {
    console.log('Firestore error: ', err);
    throw err;
  }
}


// const fetchVans = async () =>  {
//   try {
//     const response = await fetch('api/vans')
//     console.log('Raw response:', response);
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

export default fetchVans

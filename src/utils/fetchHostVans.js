
import db from '../../firebaseConfig'
import {collection, getDocs, query, where} from 'firebase/firestore/lite'


// we are having a hard coded user Id here. hostId: "123"
const hostId = '123'

const fetchHostVans = async () => {
  try {
      const vansCollectionRef = collection(db, 'vans')
      const q = query(vansCollectionRef, where('hostId', '==', hostId))
      const vans = await getDocs(q)
      return vans.docs.map(doc => ({id: doc.id, ...doc.data()}))
  } catch (err) {
    console.log('failed to fetch Hostvans' ,err)
  }
}





// const fetchHostVans = async () =>  {
//   try {
//     const response = await fetch('/api/host/vans')
//     if(!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`)
//     }
//     const data = await response.json()
//     return data
//   } catch (error) {
//     console.error('failed to fetch HostVans', error)
//     throw error
//   }
// }

export default fetchHostVans



// using the absoulte path -> /api/host/vans instead of the relative, because
// if I am using the relative, the fetch from /host/api/host/vans. this route does not exist..

import db from '../../firebaseConfig'
import {doc, getDoc} from 'firebase/firestore/lite'

const fetchHostVan = async (id) =>  {
  try {
        const vanRef = doc(db, 'vans', id )
        const vanSnapshot = await getDoc(vanRef)
        const van = {id: vanSnapshot.id, ...vanSnapshot.data()}
        return van
      } catch (error) {
    console.error('failed to fetch the Host Van', error)
    throw error
  }
}

export default fetchHostVan

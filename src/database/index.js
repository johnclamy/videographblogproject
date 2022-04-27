import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from '../firebase.config'

const db = getFirestore(app);

export const fetchData = async (setData, collectionName) => {
  try {
    const data = await getDocs(collection(db, collectionName))
    setData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
  } catch (err) {
    console.error(err.message)
  }  
}

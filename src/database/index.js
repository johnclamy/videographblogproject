import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";
import app from '../firebase.config'

const db = getFirestore(app);

const fetchData = async (setData, collectionName) => {
  try {
    const data = await getDocs(collection(db, collectionName))
    setData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
  } catch (err) {
    console.error(err.message)
  }  
}

const addData = async (data, collectionName) => {
  try {
    await addDoc(collection(db, collectionName), data)
  } catch (err) {
    console.error(err.message)
  }
}

export { addData, fetchData }

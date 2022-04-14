import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from '../services/firebase.config'

const UserContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)
  
  const logout = () => signOut(auth)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser)
      setUser(currentUser)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return <UserContext.Provider value={{
    createUser,
    user,
    logout,
    signIn
  }}>
    {children}
  </UserContext.Provider>
}

const UserAuth = () => useContext(UserContext)

export { UserAuth, AuthContextProvider }
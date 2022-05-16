import { createContext, useContext, useReducer } from 'react'

const AppStateContext = createContext()

const AppStateProvider = ({ reducer, initState = {}, children }) => {
  return (
    <AppStateContext.Provider value={useReducer(reducer, initState)}>
      {children}
    </AppStateContext.Provider>
  )
}

const useAppState = () => useContext(AppStateContext);

export { useAppState }
export default AppStateProvider
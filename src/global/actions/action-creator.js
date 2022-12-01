import actionType from "./action-type"

const login = (email, password) => {
  return {
    type: actionType.LOGIN,
    payload: {
      email,
      password
    }
  }  
}

const signUp = (username, email, password) => {
  return {
    type: actionType.SIGNUP,
    payload: {
      username,
      email,
      password
    }
  }
} 

const logout = () => {
  return {
    type: actionType.LOGOUT
  }
}

export { login, signUp, logout }
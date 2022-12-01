import actionType from "../actions/action-type";

export default function useReducer(state, { type, payload }) {
  switch (type) {
    case actionType.LOGIN:
      return {
        ...state, email: payload.email, password: payload.password
      }

    case actionType.SIGNUP:
      return {
        ...state,
        username: payload.username,
        email: payload.email,
        password: payload.password
      }
    
    case actionType.LOGOUT:
      return {}
    
    default:
      return state
  }
}

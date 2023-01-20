import actionType from "../action/action-type";

export default function userReducer(state, action) {
  switch (action.type) {
    case actionType.LOGIN:
    case actionType.SIGN_UP:
      return action.username
    case actionType.LOGOUT:
      return ''
    default:
      return state
  }
}
import tableReducer from './tableReducer'
import todosReducer from './todosReducer'
import combineReducers from './combineReducers'

const reducer = combineReducers({
  table: tableReducer,
  todos: todosReducer
})

export default reducer
import actionType from "../action/action-type";

export default function postsReducer(state, action) {
  switch (action.type) {
    case actionType.CREATE_POST:
      const newPost = {
        title: action.title,
        content: action.content,
        author: action.author,
        id: "710b962e-041c-11e1-9234-0123456789ab",
      };
      return [newPost, ...state]
    
    case actionType.FETCH_POSTS:
      return action.posts
    
    default:
      return state
  }
}
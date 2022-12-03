import actionType from "../actions/action-type";

export default function postsReducer(state, { type, payload }) {
  switch (type) {
    case actionType.CREATE_POST:
      const post = {
        title: payload.title,
        content: payload.content,
        author: payload.author,
      };
      return [post, ...state];
    default:
      return state
  }
}
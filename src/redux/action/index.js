import actionType from "./action-type"

const login = () => {
  return {
    type: actionType.LOGIN,
    username: "jbloggs247",
  };
}

const signUp = () => {
  return {
    type: actionType.SIGN_UP,
    username: "jbloggs247",
  };
}

const logout = () => {
  return {
    type: actionType.LOGOUT,
  }
}

const createPost = (title, content, user) => {
  return {
    type: actionType.CREATE_POST,
    title,
    content,
    author: user,
  }
};

const fetchPosts = (posts) => {
  return {
    type: actionType.FETCH_POSTS,
    posts
  }
}

export {
  createPost,
  fetchPosts,
  login,
  logout,
  signUp
}
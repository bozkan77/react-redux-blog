const INITIAL_STATE = {
  postList: [],
  postListErr: "",
  postDetail: {
    id: "",
    title: "",
    created_at: "",
    content: "",
    comments: [],
  },
  postDetailErr: "",
  commentErr: "",
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_POST_LIST":
      return { ...state, postList: action.payload };
    case "GET_POST_LIST_ERR":
      return { ...state, postListErr: action.payload };
    case "GET_POST":
      return { ...state, postDetail: action.payload };
    case "GET_POST_ERR":
      return { ...state, postDetailErr: action.payload };
    case "ADD_COMMENT":
      return {
        ...state,
        postDetail: {
          ...state.postDetail,
          comments: [...state.postDetail.comments, action.payload],
        },
      };
    case "ADD_COMMENT_ERR":
      return { ...state, commentErr: action.payload };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  postList: [],
  postListErr: ''
};


export const reducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_POST_LIST':
      return {...state, postList: action.payload}
    case 'GET_POST_LIST_ERR':
      return {...state, postListErr: action.payload}
    default:
      return state
  }
}
import {api} from "../../api";
import axios from "axios";

export const getPostList = () => dispatch => {
  api()
      .get("/posts")
      .then((res) => {
        dispatch({ type: 'GET_POST_LIST', payload: res.data })
      }).catch((err)=> {
        dispatch({ type: 'GET_POST_LIST_ERR', payload: 'İçerik yüklenirken hata oluştu.' })
      })
}

export const getPost = (id) => dispatch => {
  axios
  .all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
  .then((resp) => {
    const payload = {
      ...resp[0].data,
      comments: resp[1].data
    }
    dispatch({type: 'GET_POST', payload})
  })
  .catch((err) => {
    dispatch({ type: 'GET_POST_ERR', payload: "İçerik detayı yüklenirken hata oluştu"})
  });
}

export const addComment = (id, comment) => dispatch => {
  api()
      .post(`/posts/${id}/comments`, comment)
      .then((res) => {
        dispatch({ type: 'ADD_COMMENT', payload: res.data});
      })
      .catch((err) => {
        dispatch({ type: 'ADD_COMMENT_ERR', payload: 'Yorum eklerken hata oluştu.'});
      });
}

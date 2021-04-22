import {api} from "../../api";

export const getPostList = () => dispatch => {
  api()
      .get("/posts")
      .then((res) => {
        dispatch({ type: 'GET_POST_LIST', payload: res.data })
      }).catch((err)=> {
        dispatch({ type: 'GET_POST_LIST_ERR', payload: 'İçerik yüklenirken hata oluştu.' })
      })
}
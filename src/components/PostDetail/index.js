import React, { useEffect, useState } from "react";
// third party lib
import { Link, useHistory, useParams } from "react-router-dom";
import moment from "moment";
// custom components
import AddComment from "../AddComment";
import CommentList from "../CommentList";
import { api } from "../../api";
import GenModal from "../GenModal";
import { useDispatch, useSelector } from "react-redux";
// actions
import {getPost, addComment} from "../../redux/actions"

const INIT_COMMENT = {
  display_name:"",
  body: ""
}

const PostDetail = () => {

  const { id } = useParams();
  const history = useHistory();

  const dispatch = useDispatch();
  const postDetail = useSelector(state => state.postDetail);
  const [comment, setComment] =useState(INIT_COMMENT)
 

  const [deleteErr, setDeleteErr] = useState("")

  const handleOnChange = (e) => {
    setComment({...comment,[e.target.name]: e.target.value});
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment(id, comment));
  };

  useEffect(() => {
    dispatch(getPost(id))
  }, [id]);

  

  const handleDelete = (id) => {
     api()
      .delete(`/posts/${id}`)
        .then((res)=>{
          history.push('/')
        }).catch((err) => {
            console.log(err)
        })
  }

  return (
    <div className="">
      <h2>{postDetail.title}</h2>
      <p>{moment(postDetail.created_at).format("Do MMMM YYYY")}</p>
      <p>{postDetail.content}</p>
      <div className="ui buttons">
        <Link className="ui blue button" to={`/posts/${postDetail.id}/edit`}>
          Düzenle
        </Link>
        <GenModal
          title={"İçeriği Sil"}
          content={"Bu içeriği silmek istediğinizden eminmisiniz ?"}
          handleFunc={handleDelete}
          id={id}
          error={deleteErr}
        />
      </div>

      <CommentList commentList={postDetail.comments} />
      <AddComment
        handleCommentSubmit={handleCommentSubmit}
        handleOnChange={handleOnChange}
        id={id}
        comment={comment}
      />
    </div>
  );
};

export default PostDetail;

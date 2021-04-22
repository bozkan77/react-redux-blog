import React, { useEffect, useState } from "react";
// third party lib
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
// custom components
import AddComment from "../AddComment";
import CommentList from "../CommentList";
import { api } from "../../api";


const INIT_COMMENT = {
  display_name: "",
  body: "",
};

const PostDetail = (props) => {
  const { id } = props.match.params;
  const [articleDetail, setArticleDetail] = useState({});
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState(INIT_COMMENT);

  const handleOnChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
      .then((resp) => {
        setArticleDetail(resp[0].data);
        setCommentList(resp[1].data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    api()
      .post(`/posts/${id}/comments`, comment)
      .then((res) => {
        setCommentList([...commentList, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
    setComment(INIT_COMMENT);
  };

  return (
    <div className="">
      <h2>{articleDetail.title}</h2>
      <p>{moment(articleDetail.created_at).format("Do MMMM YYYY")}</p>
      <p>{articleDetail.content}</p>
      <div className="ui buttons">
      <Link className="ui blue button" to={`/posts/${articleDetail.id}/edit`}>Düzenle</Link>
      <button className="ui red button">Sil</button>
    </div>
     
      <CommentList commentList={commentList} />
      <AddComment
        handleCommentSubmit={handleCommentSubmit}
        handleOnChange={handleOnChange}
        comment={comment}
      />
    </div>
  );
};

export default PostDetail;

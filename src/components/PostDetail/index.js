import React, { useEffect, useState } from "react";
// third party lib
import axios from "axios";
import moment from "moment";

const PostDetail = (props) => {
  const { id } = props.match.params;
  const [articleDetail, setArticleDetail] = useState({});
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState({
    display_name: "",
    body: ""
  })

  useEffect(() => {
    axios
      .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
      .then((res) => setArticleDetail(res.data))
      .catch((err) => console.log(err));

    axios
      .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`)
      .then((res) => setCommentList(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  let comments = commentList?.map((com, i) => (
    <div className="item" key={i}>
      <img className="ui avatar image" src="/images/avatar/small/daniel.jpg" />
      <div className="content">
        <a className="header">{com.display_name}</a>
        <div className="description">{com.body}</div>
      </div>
    </div>
  ));

  const handleCommentSubmit = comm => {
    axios.post(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`, comm)
      .then((res)=> {
          setCommentList([...commentList, res.data])
      })
      setComment({
        display_name: "",
        body: ""
      })
  } 

  const handleOnChange = e => {
    setComment({...comment, [e.target.name]: e.target.value})
  }

  return (
    <div className="">
      <h2>{articleDetail.title}</h2>
      <p>{articleDetail.content}</p>
      <p>{moment(articleDetail.created_at).format("Do MMMM YYYY")}</p>
      <div className="ui relaxed list">
        <h3>Yorumlar</h3>
        {comments}
      </div>
      <h4>Yorumunuz</h4>
      <form className="ui form" onSubmit={(e)=> {
          e.preventDefault()
          handleCommentSubmit(comment)
        }}
        >
        <div className="ui small icon input">
          <input
            name= "display_name"
            type="text"
            placeholder="Adınız..."
            onChange={handleOnChange}
            value={comment.display_name}
          />
        </div>
        <div className="field m-t10">
          <textarea
            name="body"
            rows="2"
            placeholder="Yorumunuz..."
            onChange={handleOnChange}
            value={comment.body}
          ></textarea>
        </div>
        <button className="ui olive button">Yorumu Gönder</button>
      </form>
    </div>
  );
};

export default PostDetail;

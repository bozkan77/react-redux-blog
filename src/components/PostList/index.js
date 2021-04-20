import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./postlist.css";
// third party lib
import axios from "axios";
import moment from "moment";

const PostList = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    axios
      .get("https://react-yazi-yorum.herokuapp.com/posts")
      .then((res) => setArticleList(res.data));
  }, []);

  let articles = articleList.map((item, i) => (
    <div className="item" key={i}>
      <i className="large github middle aligned icon"></i>
      <div className="content">
        <Link to={`/posts/${item.id}`} className="header">{item.title}</Link>
        <div className="description">{moment(item.created_at).format("Do MMMM YYYY")}</div>
      </div>
    </div>
  ));

  return <div className="post-list ui relaxed divided list">{articles}</div>;
};
export default PostList;

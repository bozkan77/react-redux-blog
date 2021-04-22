import React, { useEffect, useState } from "react";
// css
import "./postlist.css";
// third party lib
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import moment from "moment";
//custom components

// actions
import {getPostList} from "../../redux/actions/getPostList"



const PostList = () => {

  const postList = useSelector(state => state.postList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostList())
  }, []);

  let articles = postList.map((item, i) => (
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

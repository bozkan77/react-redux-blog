import React from "react";

const CommentList = ({commentList}) => {

  let comments = commentList?.map((com, i) => (
    <div className="item" key={i}>
      <img className="ui avatar image" src="/images/avatar/small/daniel.jpg" />
      <div className="content">
        <a className="header">{com.display_name}</a>
        <div className="description">{com.body}</div>
      </div>
    </div>
  ));

  return(
<div className="ui relaxed list">
        <h3 className="seperator">Yorumlar</h3>
        {comments}
      </div>
  )
}
export default CommentList;
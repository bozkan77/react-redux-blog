import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../redux/actions";



const AddComment = ({ comment, handleOnChange, handleCommentSubmit, id}) => {


  return (
    <>
    <h4 className="seperator">Yorum Ekle</h4>
      <form className="ui form" onSubmit={handleCommentSubmit}
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
      </>
  )
}

export default AddComment;
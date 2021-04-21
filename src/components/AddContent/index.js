import React, { useState } from "react";
//thir party library
import axios from "axios";
// custom components
import ContentForm from "../ContentForm";

const INIT_CONTENT = {
  title: "",
  content: "",
}

const AddContent = (props) => {

  const [newContent, setNewContent] = useState(INIT_CONTENT);
  const [error, setError] = useState("")

  const onInputChange = (e) => {
    setNewContent({...newContent, [e.target.name]: e.target.value});
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    setError("")
    axios.post(`https://react-yazi-yorum.herokuapp.com/posts`, newContent)
      .then((res)=> {
        props.history.push('/')
        setNewContent(INIT_CONTENT)
      }).catch((err)=> {
        setError("Tüm alanların doldurulması zorunludur!")
        setTimeout(() => {
          setError("")
        }, 3000);
      })
  }

  return (
    <>
      <h2>İçerik Ekle</h2>
      <ContentForm 
        onInputChange={onInputChange}
        title={newContent.title}
        content={newContent.content}
        onFormSubmit={onFormSubmit}
        error={error}
      />
    </>
  );
};

export default AddContent;

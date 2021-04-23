import React, { useEffect, useState } from "react";

// custom components
import ContentForm from "../ContentForm";
import { api } from "../../api";
import { useHistory, useParams } from "react-router";

const INIT_CONTENT = {
  title: "",
  content: "",
};

const AddContent = () => {
  const { id } = useParams();
  const history = useHistory();
  const [newContent, setNewContent] = useState(INIT_CONTENT);
  const [error, setError] = useState("");
  const [editable, setEditable] = useState({});

  const onInputChange = (e) => {
    setNewContent({ ...newContent, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (id) {
      api()
        .put(`/posts/${id}`, newContent)
        .then((res) => {
          history.push(`/posts/${id}`);
        })
        .catch((err) => {
          setError("Tüm alanların doldurulması zorunludur!");
          setTimeout(() => {
            setError("");
          }, 3000);
        });
    } else {
      api()
        .post(`/posts`, newContent)
        .then((res) => {
          history.push("/");
          setNewContent(INIT_CONTENT);
        })
        .catch((err) => {
          setError("Tüm alanların doldurulması zorunludur!");
          setTimeout(() => {
            setError("");
          }, 3000);
        });
    }
  };

  useEffect(() => {
    api()
      .get(`/posts/${id}`)
      .then((res) => {
        setEditable(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id !== undefined]);

  return (
    <>
      <h2>İçerik Ekle</h2>
      <ContentForm
        onInputChange={onInputChange}
        title={newContent.title}
        content={newContent.content}
        onFormSubmit={onFormSubmit}
        error={error}
        id={id}
        editable={editable}
      />
    </>
  );
};

export default AddContent;

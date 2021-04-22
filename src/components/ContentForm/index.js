import React from "react";

const ContentForm = ({
  title,
  content,
  onInputChange,
  onFormSubmit,
  error,
  editable
}) => {


  return (
    <>
      {error && (
        <div className="ui error message">
          <div className="header">Hata!</div>
          <p>{error}</p>
        </div>
      )}
      <div className="ui form">
        <div className="field">
          <label>İçerik Başlığı</label>
          <input
            type="text"
            name="title"
            value={title || editable.title}
            onChange={onInputChange}
          />
        </div>
        <div className="field">
          <label>İçerik</label>
          <textarea
            name="content"
            value={content || editable.content}
            onChange={onInputChange}
          ></textarea>
        </div>
        <button className="ui olive button" onClick={onFormSubmit}>
          İçeriği Güncelle
        </button>
        <button className="ui button">İptal Et</button>
      </div>
    </>
  );
};

export default ContentForm;

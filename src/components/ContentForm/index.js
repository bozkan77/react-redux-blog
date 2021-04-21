import React from "react";

const ContentForm = ({title, content, onInputChange, onFormSubmit}) => {

  return (
    <div className="ui form">
      <div className="field">
        <label>İçerik Başlığı</label>
        <input type="text" name="title" value={title} onChange={onInputChange} />
      </div>
      <div className="field">
        <label>İçerik</label>
        <textarea name="content" value={content} onChange={onInputChange}></textarea>
      </div>
      <button className="ui olive button" onClick={onFormSubmit} >İçeriği Gönder</button>
      <button className="ui button">İptal Et</button>
    </div>
  );
};

export default ContentForm;

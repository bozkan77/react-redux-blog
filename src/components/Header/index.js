import React from "react";
import "./header.css";
import {Link} from "react-router-dom";


const Header = ({title}) => {
  return (
    <header className="app-header">
      {title}
        <ul className="navi">
          <li>
            <Link to="/" >Anasayfa</Link>
          </li>
          <li>
            <Link to="/add-content" >İçerik Ekle</Link>
          </li>
        </ul>
    </header>
  )
}

export default Header;
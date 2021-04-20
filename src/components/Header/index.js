import React from "react";
import "./header.css";

const Header = ({title}) => {
  return (
    <header className="app-header">
      {title}
    </header>
  )
}

export default Header;
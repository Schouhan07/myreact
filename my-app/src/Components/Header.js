import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css"

//bar bar page reload hone k siwaye <a> anchor tag ki jagha hum log <link> tag use krenge ye page ko bar bar reload nhi krega
const Header = () => {
  return (
  <>
    <nav>YOUR DAILY GOALS</nav>
    <div className="header">
      <Link to="/"> Home</Link>
      <Link to="/about"> about</Link>
      <Link to="/contact">contact</Link>
    </div>
  </>
  );
}

export default Header;
import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";
import '../App.css';


const Header = () => {

  return (
    <header className="header">
      <Logo/>
      <Menu/>
    </header>
  );
};

export default Header;



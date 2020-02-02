import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";
import '../App.css';


const Header = () => {

  return (
    <div>
      <Logo/>
      <div className='menu'>
        <Menu/>
      </div>
    </div>
  );
};

export default Header;



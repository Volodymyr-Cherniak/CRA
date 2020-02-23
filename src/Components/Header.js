import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";
import '../index.css';


const Header = (props) => {

  return (
    <header className='head1'>
        <Logo/>
        <Menu menuItems={props.menuItems}/>
    </header>
  );
};

export default Header;



import React from 'react';
import MenuItem from "./MenuItem";


const Menu = (props) => {

  return (
    <ul className='menu'>
      {props.menuItems.map(el => <MenuItem key={el.text} menuItem={el} />)}
    </ul>
  );
};

export default Menu;

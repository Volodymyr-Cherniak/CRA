import React from 'react';
import Logo from "./Logo";
import FooterMenu1 from "./FooterMenu1";
import MenuFooter1 from "./FooterMenu1";
import Text from "./Text";


const Footer = (props) => {

  return (
    <footer className='footer'>
      <Logo/>

      <div className='footeritems'>
        {props.footerItems.map(el => <FooterMenu1 key={el.text} footerItem={el}/>)}
      </div>

      <div className='footeritems'>
        {props.menuFooter1.map(el => <MenuFooter1 key={el.text} menuFooter1={el}/>)}
      </div>

      <div>
        <Text/>
      </div>

    </footer>
  );
};


export default Footer;

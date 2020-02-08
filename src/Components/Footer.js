import React from 'react';
import Logo from "./Logo";
import FooterItem from "./FooterItem";
import MenuFooter1 from "./FooterMenu1";
import Text from "./Text";


const Footer = (props) => {

  return (
    <footer>
      <Logo/>
      <div>
        {props.footerItems.map(el => <FooterItem key={el.text} footerItem={el}/>)}
      </div>
      <div>
        {props.menuFooter1.map(el => <MenuFooter1 key={el.text} menuFooter1={el}/>)}
      </div>
      <div>
          <Text/>
      </div>
    </footer>
  );
};


export default Footer;

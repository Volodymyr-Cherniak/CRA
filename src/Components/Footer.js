import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";
import FooterMenu2 from "./FooterMenu2";
import Text from "./Text";


const Footer = (props) => {

  return (
    <footer className='footer'>
      <Logo/>

      <div className='footeritems'>
        <Menu menuItems={props.footerMenu1}/>
      </div>

      <div className='footeritems'>
        {props.footerMenu2.map(el => <FooterMenu2 key={el.text} footerMenu2={el}/>)}
      </div>

      <div>
        <Text foterText={props.footerText}/>
      </div>

    </footer>
  );
};


export default Footer;

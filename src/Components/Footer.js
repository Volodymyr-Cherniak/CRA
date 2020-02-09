import React from 'react';
import Logo from "./Logo";
import FooterMenu1 from "./FooterMenu1";
import FooterMenu2 from "./FooterMenu2";
import Text from "./Text";


const Footer = (props) => {

  return (
    <footer className='footer'>
      <Logo/>

      <div className='footeritems'>
        {props.footerMenu1.map(el => <FooterMenu1 key={el.text} footerMenu1={el}/>)}
      </div>

      <div className='footeritems'>
        {props.footerMenu2.map(el => <FooterMenu2 key={el.text} footerMenu2={el}/>)}
      </div>

      <div>
        <Text/>
      </div>

    </footer>
  );
};


export default Footer;

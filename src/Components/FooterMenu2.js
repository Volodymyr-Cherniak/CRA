import React from 'react';

const FooterMenu2 = (props) => {

  return (
    <div>
      <a href={props.footerMenu2.link}>{props.footerMenu2.text}</a>
    </div>
  );
};

export default FooterMenu2;

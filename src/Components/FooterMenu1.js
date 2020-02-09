import React from 'react';

const FooterMenu1 = (props) => {

  return (
    <div>
      <a href={props.footerMenu1.link}>{props.footerMenu1.text}</a>
    </div>
  );
};

export default FooterMenu1;

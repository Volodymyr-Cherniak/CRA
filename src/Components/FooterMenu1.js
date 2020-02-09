import React from 'react';

const FooterMenu1 = (props) => {

  return (
    <div>
      <a href={props.footerItem.link}>{props.footerItem.text}</a>
    </div>
  );
};

export default FooterMenu1;

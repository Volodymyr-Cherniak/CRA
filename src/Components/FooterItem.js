import React from 'react';

const FooterItem = (props) => {

  return (
    <div>
      <a href={props.footerItem.link}>{props.footerItem.text}</a>
    </div>
  );
};

export default FooterItem;

import React from 'react';

const MenuItem = (props) => {
  return (
    <div>
      <a href={props.menuItem.link}>{props.menuItem.text}</a>
    </div>
  );
};

export default MenuItem;

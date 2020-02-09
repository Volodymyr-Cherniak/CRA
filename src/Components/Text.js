import React from 'react';

const Text = () => {
  return (
    <div>
      <p className='footertext'>
        Because some numbers use the e character in their string representation (e.g. 6.022e23 for 6.022 × 1023), using parseInt to truncate numbers will produce unexpected results when used on very large or very small numbers. parseInt should not be used as a substitute for Math.floor().
      </p>
    </div>
  );
};

export default Text;








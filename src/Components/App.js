import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Header from "./Header";
import Footer from "./Footer";
import Calculator from "./Calculator/Calculator";
import Content from "./Content";




const App = () => {

  const buttonClicked = (name) => {
    console.log('Clicked!!' + name)
  };

  const items = [
    {
      text: 'Home',
      link: 'home-page'
    },
    {
      text: 'Products',
      link: 'prod-page'
    },
    {
      text: 'Service',
      link: 'serv-page'
    },
    {
      text: 'Price',
      link: 'price-page'
    }
  ];

  const footerMenuItems2 = [
    {
      text: 'footerMenu1',
      link: 'footer1-page'
    },
    {
      text: 'footerMenu1.2',
      link: 'footer2-page'
    },
    {
      text: 'footerMenu1.3',
      link: 'footer3-page'
    },
    {
      text: 'footerMenu1.4',
      link: 'footer4-page'
    }
  ];

  const text = "Because some numbers use the e character in their string representation (e.g. 6.022e23 for 6.022 × 1023),using parseInt to truncate numbers will produce unexpectedresults when used on very large or very small numbers.parseInt should not be used as a substitute for Math.floor().";


  return (
    <div>
      <div className="container">

        <Header menuItems={items}/>
        <Content bc={buttonClicked}/>
        <Calculator/>
        <Footer
          footerMenu1={items}
          footerMenu2={footerMenuItems2}
          footerText={text}
        />
      </div>
    </div>
  );
};

export default App;

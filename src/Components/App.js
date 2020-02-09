import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";


const App = () => {
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
  const footerMenuItems1 = [
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

  return (
    <div>
      <div className="container">
        <Header menuItems={items}/>
        <Content/>
        <Footer footerMenu1={footerMenuItems1} footerMenu2={footerMenuItems2}/>
      </div>
    </div>
  );
};

export default App;


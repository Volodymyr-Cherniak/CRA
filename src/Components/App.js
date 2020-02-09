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
  const footerItems = [
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
  const menuFooter1 = [
    {
      text: 'menuFooter1',
      link: 'footer1-page'
    },
    {
      text: 'menuFooter1.2',
      link: 'footer2-page'
    },
    {
      text: 'menuFooter1.3',
      link: 'footer3-page'
    },
    {
      text: 'menuFooter1.4',
      link: 'footer4-page'
    }
  ];

  return (
    <div>
      <div className="container">
        <Header menuItems={items}/>
        <Content/>
        <Footer footerItems={footerItems} menuFooter1={menuFooter1}/>
      </div>
    </div>
  );
};

export default App;


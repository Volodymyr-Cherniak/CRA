import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Header from "./App/Header";
import Footer from "./App/Footer";
import Content from "./App/Content";


const App = () => {

  return (
    <div>
      <div className='container'>
        <div className="topnav">
          <Header/>
        </div>
        <Content/>
        <Footer/>
      </div>
      </div>
  );
};

export default App;


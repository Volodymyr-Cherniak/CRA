import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";


const App = () => {

  const name = 'Johnny English';

  return (
    <div className="App">
      <h1>{name}</h1>
      <Header/>
      <Footer/>
    </div>
  );
};

export default App;

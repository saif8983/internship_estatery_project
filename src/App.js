import React from 'react';
import Navbar from './Components/Navbar';
import Homecomponent from './Components/Home';
import './App.css';

function App() {
  return (
    <>
    <div className="container">
      <div className="navbarBar"><Navbar/></div>
      <div className="mainContainer"><Homecomponent/></div>
    </div>
    </>
  );
}

export default App;

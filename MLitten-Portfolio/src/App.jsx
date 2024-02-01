import React from 'react';
import Header from './components/header';
import About from './components/about';
import Portfolio from './components/portfolio';
import { useState } from "react";
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Outlet></Outlet>
    </div>
  );
}

export default App;

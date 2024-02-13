import React from "react";
import Header from "./components/header";
import Footer from "./components/footer"
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer></Footer> 
    </div>
  );
}

export default App;

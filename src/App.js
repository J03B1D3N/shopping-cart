import React, { useState } from "react";
import Header from "./components/header.js"
import Footer from "./components/footer.js";
import Main from "./components/main.js";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss"



const App = () => {
 
  return (
    
   
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>


    
  )
};

export default App;
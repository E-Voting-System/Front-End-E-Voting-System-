import React from 'react';
import {Routes, Route } from "react-router-dom";
import './App.css';
import Signin from "./components/signin.js"
import Signup from "./components/signup.js"
import Home from "./components/home.js"
function App() {
  return (
   <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
    </Routes>

  );
}

export default App;




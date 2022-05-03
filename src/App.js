import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes } from "react-router-dom";
import { NavMenu } from './components/NavMenu';
import SiginIn from './components/SiginIn';
import SiginUp from './components/SiginUp';
import MenuItem from './components/MenuItem';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
      <NavMenu/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/SiginIn" element={<SiginIn/>} />
        <Route  path="/SiginUp" element={<SiginUp/>} />
        <Route  path="/MenuItem" element={<MenuItem/>} />
        </Routes>
        </div>
        </BrowserRouter>
 
  );
}

export default App;

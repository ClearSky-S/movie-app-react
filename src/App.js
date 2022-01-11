import './App.css';
import Home from './routes/Home';
import Detail from './routes/Detail';

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/movie/:id" element={<Detail/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;

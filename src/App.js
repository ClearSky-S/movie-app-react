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
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>}/>
        <Route path={`${process.env.PUBLIC_URL}/home`} element={<Home/>}/>
        <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Home } from './componentes/Home';
import { Routes, Route } from "react-router-dom";
import MyPhotos from './componentes/MyPhotos';



function App() {
  return (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/my-photos" element={<MyPhotos/>} />
        </Routes>
  )
}

export default App;

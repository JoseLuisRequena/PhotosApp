import React from 'react';
import './App.css';
import { Home } from './componentes/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPhotos from './componentes/MyPhotos';



function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/my-photos" element={<MyPhotos/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

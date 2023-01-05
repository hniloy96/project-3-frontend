import './App.css';
import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home-page';
import Profile from './Pages/Profile-page';
import Feed from './Pages/Feed-page'

import Nav from './Components/Nav';

function App() {
  return (
    <div className='App'>
      <div className="Side-bar">
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />

          <Route path="/profile" element={<Profile />} />
        </Routes>
        <div className="nav-bar">
          <Nav />
        </div>

      </div>
      <audio className='player' controls/>
    
     
    </div>
    
  );
}

export default App;

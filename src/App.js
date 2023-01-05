import './App.css';
import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home-page';
import Profile from './Pages/Profile-page';
import Feed from './Pages/Feed-page'

import Nav from './Pages/Nav';

function App() {
  return (
    <div className='App'>
      <div className="Side-bar">
        <div className="nav-bar">
          <Nav />
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />

          <Route path="/profile" element={<Profile />} />
        </Routes>

      </div>

      <audio className='player' src='' controls />
    
     
    </div>
    
  );
}

export default App;

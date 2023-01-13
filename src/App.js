import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Profile from './Pages/Profile-page';
import Feed from './Pages/Feed-page';
import CreatePost from './Components/Post/CreatePost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/create" element={<CreatePost />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home-page';
import Profile from './Pages/Profile-page';
import Feed from './Pages/Feed-page';
import CreatePost from './Components/Post/CreatePost';
import React from 'react';
import Card from './Components/Card/Card';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/create" component={<CreatePost />} />
        <Route exact path="/feed" element={<Feed />} />
        {/* <Route path="/feed" component={Feed} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;

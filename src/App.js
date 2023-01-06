import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import Home from './Pages/Home-page';
import Profile from './Pages/Profile-page';
import Feed from './Pages/Feed-page';
import Nav from './Components/Nav';
import Card from './Components/Card/Card';

function App() {
  const [posts, setPosts] = useState([
    {
      title: 'Hard to fall',
      description: 'This pulled me out of my comfort zone',
      likes: 0,
      comments: []
    }
  ]);

  function handleLike(index) {
    const updatedPosts = [...posts];
    updatedPosts[index].likes++;
    setPosts(updatedPosts);
  }

  function handleComment(index, comment) {
    const updatedPosts = [...posts];
    updatedPosts[index].comments.push(comment);
    setPosts(updatedPosts);
  }

  return (
    <div className="App">
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
      <audio className="player" controls />
      <div className="app">
        {posts.map((post, index) => (
          <Card
            key={index}
            post={post}
            onLike={() => handleLike(index)}
            onComment={(comment) => handleComment(index, comment)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

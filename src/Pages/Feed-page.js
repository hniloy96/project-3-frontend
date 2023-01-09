import React, { useState } from 'react';
import Card from '../Components/Card/Card';

function Feed() {
  <div></div>;
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Hard to fall',
      description: 'This pulled me out of my comfort zone',
      likes: 0,
      comments: []
    },
    {
      id: 2,
      title: 'Another post',
      description: 'This is another post',
      likes: 0,
      comments: []
    }
  ]);

  function handleLike(id) {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        return {
          ...post,
          likes: post.likes + 1
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  }

  function handleComment(id, comment) {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        return {
          ...post,
          comments: [...post.comments, comment]
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  }

  return (
    <div>
      {posts.map((post) => (
        <Card
          key={post.id}
          post={post}
          onLike={() => handleLike(post.id)}
          onComment={(comment) => handleComment(post.id, comment)}
        />
      ))}
    </div>
  );
}

export default Feed;

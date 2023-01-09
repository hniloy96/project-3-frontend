import React, { useState } from 'react';

function Card({ post, onLike, onComment }) {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [isVisible, setIsVisible] = useState(false);


  function handleLike() {
    setLiked(true);
    onLike();
    
  }

  function handleCommentSubmit(e) {
    e.preventDefault();
    onComment(comment);
    setComment('');
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3>{post.title}</h3>
      </div>
      <div className="card-body">
        <p>{post.description}</p>
      </div>
      <div>
        <h1>{post.imageUrl}</h1>
      </div>
      <div className="card-footer">
        <button className="btnLikes" onClick={handleLike}>
          {liked ? (
            <>
              <i className="fas fa-heart mr-2"></i>
              Liked
            </>
          ) : (
            'Like'
          )}
        </button><div className="card-likes">
        <span>{post.likes} likes</span>
      </div>
        <form onSubmit={handleCommentSubmit}>
          <div className="input-group mr-2">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Leave a comment"
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-secondary rounded-pill">
                Post
              </button>
            </div>
          </div>
        </form>
        <button className="btn btn-success">
          Review
        </button>
      </div>
      <div className="card-comments">
        {post.comments.map(c => (
          <div key={c} className="card-comment">
            <p>{c}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Card;

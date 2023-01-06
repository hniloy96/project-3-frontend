import './style/card.css'
import React from 'react';

function Card({ post, onLike, onComment }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{post.title}</h3>
      </div>
      <div className="card-body">
        <p>{post.description}</p>
      </div>
      <div className="card-footer">
        <button className="btn" onClick={onLike}>
          Like
        </button>
        <button
          className="btn"
          onClick={() => onComment('Comment')}
        >
          Comment
        </button>
        <button className="btn">Review</button>
      </div>
    </div>
  );
}

export default Card;

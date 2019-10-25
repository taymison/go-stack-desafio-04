import React from 'react';

import './index.css';

function Comment({ author, content }) {
  return (
    <div className="comment">
      <div className="comment__author">
        <img
          className="comment__avatar"
          src={author.avatar}
          alt={author.name}
        />
      </div>
      <p className="comment__content">
        <span className="comment__content__author">{author.name}</span>{' '}
        {content}
      </p>
    </div>
  );
}

export default Comment;

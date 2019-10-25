import React from 'react';

import Comment from './Comment';

import './index.css';

function Post({ author, date, content, comments }) {
  return (
    <section className="post">
      <div className="post__author">
        <img
          className="post__author__avatar"
          src={author.avatar}
          alt={author.name}
        />
        <div className="post__author__details">
          <a href="#" className="post__author__details__name">
            {author.name}
          </a>
          <p className="post__author__details__date">{date}</p>
        </div>
      </div>
      <p className="post__content">{content}</p>
      <hr className="post__separator" />
      <div className="post__comemnts">
        {comments.map(comment => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
    </section>
  );
}

export default Post;

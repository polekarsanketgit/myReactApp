// src/pages/Result.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments } from '../utils/commentsSlice';

const Result = () => {
  const dispatch = useDispatch();
  const { comments, status, error } = useSelector((state) => state.comments);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchComments());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <p>Loading...</p>;
  } else if (status === 'succeeded') {
    // Display only the first 10 comments for brevity
    content = comments.slice(0, 10).map((comment) => (
      <div key={comment.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
        <h3>{comment.name}</h3>
        <p>{comment.body}</p>
        <p><em>By: {comment.email}</em></p>
      </div>
    ));
  } else if (status === 'failed') {
    content = <p>Error: {error}</p>;
  }

  return (
    <section>
      <h2>Comments</h2>
      {content}
    </section>
  );
};

export default Result;

import React from 'react';
import { useData } from './Context.jsx';
import { PostBody, Title, Author } from './styled';

const Posts = () => {
  const { state } = useData();

  if (state.data.length < 0) {
    return null;
  }

  const posts = state.text.length > 0 ? state.filtered : state.data;

  return (
    <div>
      {posts.map(({
        title, body, author, username, id,
      }) => (
        <PostBody key={id}>
          <Title>
            {title}
          </Title>
          <p>
            {body}
          </p>
          <Author>
            posted by @
            {username}
            (
            {author}
            )
          </Author>
        </PostBody>
      ))}
    </div>
  );
};

export default Posts;

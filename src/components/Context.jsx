import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

export const DataContext = React.createContext();

export const useData = () => useContext(DataContext);
const DataProvider = ({ children }) => {
  const [state, setState] = useState({
    data: [],
    filtered: [],
    text: '',
  });

  const fetchPosts = async () => {
    const users = await axios('https://jsonplaceholder.typicode.com/users/');
    const posts = await axios('https://jsonplaceholder.typicode.com/posts');
    const data = posts.data.map(({
      userId, id, title, body,
    }) => {
      const author = users.data.find((user) => user.id === userId);
      const formattedBody = body.split('\n').join(' ');
      return {
        title, body: formattedBody, author: author.name, username: author.username, id,
      };
    });
    setState({
      data, filtered: [], text: '',
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPosts = (text) => {
    const filtered = state.data.filter(({ title, body }) => title.includes(text.trim()) || body.includes(text.trim()));

    setState((prev) => ({
      ...prev,
      filtered,
      text,
    }));
  };

  return (
    <DataContext.Provider value={{
      state,
      filter: filterPosts,
    }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

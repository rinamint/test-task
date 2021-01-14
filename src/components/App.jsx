import React from 'react';
import Form from './Form.jsx';
import Posts from './Posts.jsx';
import DataProvider from './Context.jsx';
import GlobalFonts from '../fonts/fonts.js';
import { Filter } from './styled';

const App = () => (
  <DataProvider>
    <GlobalFonts />
    <Filter>
      <Form />
    </Filter>
    <Posts />

  </DataProvider>
);

export default App;

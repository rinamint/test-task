/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { useData } from './Context.jsx';
import { StyledForm, Input } from './styled.js';

const Form = () => {
  const { filter } = useData();

  const filterPosts = (e) => {
    const { value } = e.target;
    filter(value);
  };

  return (
    <StyledForm>
      <label> Filter </label>
      <Input type="text" onChange={filterPosts} />
    </StyledForm>
  );
};

export default Form;

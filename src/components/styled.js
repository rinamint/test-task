import styled from 'styled-components';

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2%;
  height: 35vh;
  font-family: davidLibre;
  font-size: 2rem;
  background-color: #4A586E;
`;

export const PostBody = styled.div`
  display: flex;
  flex-flow: column;
  margin: auto;
  padding: 0 1em;
  width: 80%;
  border-bottom: 3px solid #4A586E;
  font-family: davidLibre;
  font-size: 150%;
  color: #1A2026;
`;

export const Title = styled.p`
margin-bottom: 0;
font-style: oblique;
color: #1A2026;
`;

export const Author = styled.p`
  align-self: flex-end;
  font-size: 70%;
  border-top: 3px solid #D5D5D5;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  flex-basis: 1;
  width: 100%;
  height: 1em;
  padding: 10px;
  border: 2px solid #2F3538;
  border-radius: 4px;
  font-size: 0.7em;
  color: #4A586E;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50%;
  background-color: #4A586E;
`;

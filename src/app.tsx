import React from 'react';
import { render } from 'react-dom';
import { styled } from 'linaria/react';

const appEl = document.getElementById('app');

const App = styled.h1`
  font-family: sans-serif;
`;

render(<App>Hello!</App>, appEl);

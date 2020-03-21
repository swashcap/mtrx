import React from 'react';
import { render } from 'react-dom';
import { styled } from 'linaria/react';

import '../node_modules/normalize.css/normalize.css';
import { globalStyles } from './globalStyles';

const appEl = document.getElementById('app');

const App = styled.p`
  color: red;
`;

render(
  <div className={globalStyles}>
    <App>Hello!</App>
  </div>,
  appEl
);

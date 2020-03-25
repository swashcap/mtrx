import React from 'react';
import { cx } from 'linaria';
import { render } from 'react-dom';

import '../node_modules/normalize.css/normalize.css';
import { globalStyles } from './globalStyles';
import { App } from './components/App';
import { light } from './themes/light';

const appEl = document.getElementById('app');

render(
  <div className={cx(globalStyles, light)}>
    <App />
  </div>,
  appEl
);
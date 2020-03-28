import React from 'react';
import { cx } from 'linaria';
import { render } from 'react-dom';

import '../node_modules/normalize.css/normalize.css';
import { Root } from './components/Root';
import { globalStyles } from './styles/global';
import { light } from './themes/light';

const appEl = document.getElementById('app');

render(
  <div className={cx(globalStyles, light)}>
    <Root />
  </div>,
  appEl
);

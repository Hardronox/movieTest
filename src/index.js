/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {App} from './root/App';
import {Provider} from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // eslint-disable-next-line
  document.getElementById('root')
);

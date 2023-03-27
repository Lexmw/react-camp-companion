import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../css/main-styles.css';
import {Provider} from 'react-redux';
import rootStore from './rootStore';

ReactDOM.render(
  <Provider store={rootStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

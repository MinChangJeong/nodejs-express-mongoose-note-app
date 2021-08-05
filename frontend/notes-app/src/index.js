import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './state/store'

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  rootElement
);

reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from './components/Context';
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);

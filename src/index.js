import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store1 from './redux/store';
import App from './App';

const store = store1;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

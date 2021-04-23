import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension"
import App from './App';
// custom components
import { reducer } from './redux/reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

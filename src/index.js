import React from 'react';              //si queremos importar algo del node_modules, escribimos sin ./
import ReactDOM from 'react-dom';     //importamos react-dom, que está en node_modules
import './index.css';    // con ./
import App from './App';   //importamos nuestro App.js (que está en Ordner src). con ./
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

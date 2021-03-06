import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const baseUrl = document.getElementsByTagName('base')[0];
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={String(baseUrl)} >
    <App />
  </BrowserRouter>,
  rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

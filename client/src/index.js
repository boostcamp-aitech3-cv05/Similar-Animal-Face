import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';


async function getHome() {
  const response = await axios.get('http://127.0.0.1:8000/')
  return response
}

const dataPromise = getHome()

ReactDOM.render(
  <App
    subject={dataPromise}
  />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
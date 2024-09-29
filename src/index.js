import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/*
if (window.location.protocol !== "https:") {
  window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
}
*/
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

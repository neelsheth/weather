import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header';
import Home from './Components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header></Header>
    <Home></Home>
  </React.StrictMode>
);


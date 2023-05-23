import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Snowfall from 'react-snowfall';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Snowfall color={"white"} radius={[1.0, 5.0]} />
    <Header></Header>
    <Home></Home>
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import Container from './container';

const root = ReactDOM.createRoot(document.querySelector('.wrapper'));
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);


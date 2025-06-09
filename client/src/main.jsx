import { StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

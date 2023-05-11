import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductContextProvider from './contexts/ProductContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductContextProvider>

    <App />
  </ProductContextProvider>
);


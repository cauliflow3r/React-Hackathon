import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductContextProvider from './contexts/ProductContextProvider';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './contexts/CartContextProvider';
import AuthContextProvider from './contexts/AuthContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AuthContextProvider>
    <CartContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </CartContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);


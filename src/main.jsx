import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Provider from './contexts/ProductContext.jsx';
import Category from './contexts/Category.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Category>
      <Provider>
        <App />
      </Provider>
    </Category>
  </React.StrictMode>,
)

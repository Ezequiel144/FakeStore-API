import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Provider from './contexts/ProductContext.jsx';
import Category from './contexts/Category.jsx';
import SidebarContext from './contexts/SidebarContext.jsx';
import CartContext from './contexts/CartContext.jsx';
import AuthContext from './contexts/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <CartContext>
        <SidebarContext>
          <Category>
            <Provider>
              <App />
            </Provider>
          </Category>
        </SidebarContext>
      </CartContext>
    </AuthContext>
  </React.StrictMode>,
)

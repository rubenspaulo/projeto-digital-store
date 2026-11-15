import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <-- Importar o BrowserRouter
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* <-- Envolver a aplicação aqui */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
import { createRoot } from 'react-dom/client';
import App from './App';
import { store } from './app/store';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './styles/variables.css';
import '@fontsource/manrope';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

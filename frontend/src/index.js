import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import { App } from './components/App';
import { store } from './store';
import { ThemeProvider } from './components/ToggleSwitch/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //<BrowserRouter> uncomment for render deploy, comment browserrouter with basename
  <BrowserRouter basename="/soyummy">
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>

  // </React.StrictMode>
);

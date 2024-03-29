import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ToggleColorModeProvider from './utils/ToggleColorMode';

import App from './App';
import './index.css';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ToggleColorModeProvider>
          <App />
        </ToggleColorModeProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
);

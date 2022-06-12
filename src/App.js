import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components';

function App() {
  return (
    <div>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <h1>Test</h1>
    </div>
  );
}

export default App;

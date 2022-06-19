import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Movies, Actors, MovieDetails, Profile } from './pages';

function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <main>
        <Routes>
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/" element={<Movies />} />
        </Routes>
      </main>

      <h1>Hello, World - Filmpire</h1>
    </div>
  );
}

export default App;

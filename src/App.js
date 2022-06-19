import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Navbar } from './components';
import { Movies, Actors, MovieDetails, Profile } from './pages';

import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/" element={<Movies />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

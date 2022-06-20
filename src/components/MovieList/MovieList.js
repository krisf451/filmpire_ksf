/* eslint-disable indent */
import React from 'react';
import { Grid } from '@mui/material';

import { Movie } from '..';
import useStyles from './styles';

function MovieList({ movies, numberOfMovies, isCast }) {
  const classes = useStyles();
  console.log('TESTSETS', movies);

  return (
    <Grid container className={classes.moviesContainer}>
      {isCast
        ? movies?.slice(0, numberOfMovies)?.map((movie, i) => <Movie key={i} movie={movie} i={i} />)
        : movies?.results
            ?.slice(0, numberOfMovies)
            ?.map((movie, i) => <Movie key={i} movie={movie} i={i} />)}
    </Grid>
  );
}

export default MovieList;

import { useEffect, useState } from 'react';
import { Grid, Typography, Button, Box, CircularProgress } from '@mui/material';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

import { useGetActorDetailsQuery, useGetActorsMoviesQuery } from '../../redux/services/TMDB';
import { MovieList } from '../../components';
import useStyles from './styles';

function Actors() {
  const page = 1;
  const { id } = useParams();
  const { data, isFetching, error } = useGetActorDetailsQuery(id);
  const { data: movieData, isFetching: movieIsFetching } = useGetActorsMoviesQuery(id);
  const classes = useStyles();
  const navigate = useNavigate();
  const bornOn = new Date(data?.birthday);

  useEffect(() => {
    console.log(movieData);
  }, [movieData]);

  if (isFetching) {
    return (
      <Box align="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button startIcon={<ArrowBack />} variant="contained" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4} align="center">
          <img src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`} alt="actor" className={classes.image} />
        </Grid>
        <Grid item lg={7} xl={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography variant="h2" gutterBottom>{data?.name}</Typography>
          <Typography variant="h5" gutterBottom>Born: {new Date(data?.birthday).toDateString()}</Typography>
          <Typography variant="body1" align="justify" paragraph>{data?.biography || 'sorry, no biography yet'}</Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button variant="contained" color="primary" target="_blank" href={`https://www.imdb.com/name/${data?.imdb_id}`}>
              IMDB
            </Button>
            <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color="primary">
              Go Back
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin="2rem 0">
        <Typography variant="h2" align="center" gutterBottom>Movies</Typography>
        {movieData && <MovieList movies={movieData?.cast} isCast numberOfMovies={12} />}
      </Box>
    </>

  );
}

export default Actors;


import React from 'react';
import { Grid, Typography, Button, Box, CircularProgress } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { useGetActorDetailsQuery, useGetActorsMoviesQuery } from '../../redux/services/TMDB';
import { MovieList } from '../../components';
import useStyles from './styles';

function Actors() {
  const { id } = useParams();
  const { data, isFetching, error } = useGetActorDetailsQuery(id);
  const { data: movieData, isFetching: movieIsFetching } = useGetActorsMoviesQuery(id);
  const classes = useStyles();
  const bornOn = new Date(data?.birthday);

  if (isFetching) {
    return (
      <Box align="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return <Link to="/">Something has gone wrong, Go back</Link>;
  }
  return (
    <Grid container className={classes.actorsContainer}>
      <Grid item xs={12} md={6} lg={4} align="center">
        <img
          src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
          alt="actor"
          className={classes.actorPoster}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={8} className={classes.actorInfo} align="center">
        <Typography variant="h3">{data?.name}</Typography>
        <Typography variant="h5">Born:&nbsp;{bornOn.toDateString()}</Typography>
        <Typography variant="p" lineHeight="2">
          {data?.biography.substring(0, 1000)}
        </Typography>
        <Box display="flex" justifyContent="space-around" marginTop="20px">
          <Button
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.imdb.com/title/${data?.imdb_id}`}
            variant="contained"
          >
            IMDB
          </Button>
          <Button component={Link} to="/">
            <ArrowBack />
            Back
          </Button>
        </Box>
      </Grid>
      {movieIsFetching ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <CircularProgress size="8rem" />
        </Box>
      ) : (
        <Box marginTop="20px">
          <Typography variant="h3" align="center">
            Movies
          </Typography>
          <MovieList movies={movieData?.cast} isCast />
        </Box>
      )}
    </Grid>
  );
}

export default Actors;

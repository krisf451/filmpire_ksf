import useStyles from './styles';

function Hero({ movie }) {
  const classes = useStyles();
  console.log(movie);
  return (
    <div
      className={classes.container}
    >
      <div className={classes.bgGradient} />
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt="movie"
        className={classes.heroImage}
      />
      <div className={classes.textContainer}>
        <h3 style={{ marginBottom: '10px' }}>{movie.title}</h3>
        <p>
          {movie.overview}
        </p>
      </div>

    </div>
  );
}

export default Hero;

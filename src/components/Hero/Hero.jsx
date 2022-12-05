
import useStyles from './styles';
import { useThemeContext } from '../../utils/ToggleColorMode';

function Hero({ movie }) {
  const classes = useStyles();
  const { mode } = useThemeContext();
  console.log(mode);
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

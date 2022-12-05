import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    position: 'relative',
    height: '590px',
    width: '100%',
    marginBottom: '20px',
  },
  heroImage: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    opacity: 0.5,
  },
  bgGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '590px',
    background: 'linear-gradient(to bottom, black 0%, black 100%)',
  },
  text: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: '20px',
    width: '50%',
    color: 'white',
    textAlign: 'center',
    fontSize: '1.25rem',
    fontWeight: '800',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '50%',
    color: 'white',
    fontWeight: '800',
    fontSize: '1.25rem',
    padding: '40px',
    textAlign: 'center',

    [theme.breakpoints.down('lg')]: {
      width: '100%',
      fontSize: '1rem',
    },
  },
}));

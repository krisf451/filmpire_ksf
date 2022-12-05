import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  actorsContainer: {
    display: 'flex',
    margin: '10px 0 !important',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  actorPoster: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '350px',
    height: '450px',
    marginBottom: '30px',
    boxShadow: '0.5em 1em 1em rgb(64,64,70)',
  },
  info: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  image: {
    maxWidth: '90%',
    borderRadius: '20px',
    objectFit: 'cover',
    boxShadow: '0.5em 0.5em 1em rgb(64,64,70)',
  },
}));

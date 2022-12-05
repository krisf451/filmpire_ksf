import { ExitToApp } from '@mui/icons-material';
import { Typography, Box, Button } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RatedCards } from '../../components';
import { useGetListQuery } from '../../redux/services/TMDB';

function Profile() {
  const { user } = useSelector((state) => state.auth);
  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({ listName: 'favorite/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });
  const { data: watchlistMovies, refetch: refetchWatchlist } = useGetListQuery({ listName: 'watchlist/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  useEffect(() => {
    refetchFavorites();
    refetchWatchlist();
  }, []);
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" justifyContent="space-between">
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies?.results?.length && !watchlistMovies?.results?.length ? (
        <Typography variant="h5">
          Add favorites or watchlist some movies to see them here!
        </Typography>
      ) : (
        <Box>
          <RatedCards title="Favorite Movies" data={favoriteMovies} />
          <RatedCards title="Watchlist Movies" data={watchlistMovies} />
        </Box>
      )}
    </Box>
  );
}

export default Profile;

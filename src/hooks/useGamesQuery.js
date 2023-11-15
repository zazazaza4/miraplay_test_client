import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getGames } from '@/api/games';
import { logout } from '@/store/slices/authSlice';
import { HOME_ROUTE } from '@/constants';

export const useGames = (page, isFreshFirst = true, genre, gamesToShow) => {
  const [games, setGames] = useState([]);
  const [isOver, setIsOver] = useState(false);
  const [gamesListLength, setGamesListLength] = useState(gamesToShow);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleError = (error) => {
    if (error.response && error.response.status === 401) {
      dispatch(logout());
      localStorage.clear();

      navigate(HOME_ROUTE);
    } else {
      console.error('An error occurred:', error.message);
    }
  };

  const { isLoading, refetch } = useQuery({
    queryKey: ['get games'],
    queryFn: async () => {
      try {
        const data = await getGames(page, isFreshFirst, genre, gamesToShow);

        setGames((prev) => [...prev, ...data.games]);
        setGamesListLength(data.gamesListLength);

        if (data.gamesListLength === gamesListLength) {
          setIsOver(true);
        } else {
          setIsOver(false);
        }

        return data;
      } catch (error) {
        handleError(error);
      }
    },
    onError: handleError,
  });

  return {
    isLoading,
    games,
    refetch,
    isOver,
    length: gamesListLength,
  };
};

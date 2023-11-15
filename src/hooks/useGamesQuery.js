import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getGames } from '@/api/games';

export const useGames = (page, isFreshFirst = true, genre, gamesToShow) => {
  const [games, setGames] = useState([]);
  const [isOver, setIsOver] = useState(false);
  const [gamesListLength, setGamesListLength] = useState(gamesToShow);

  const { isLoading, refetch } = useQuery({
    queryKey: ['get games'],
    queryFn: async () => {
      const data = await getGames(page, isFreshFirst, genre, gamesToShow);

      setGames((prev) => [...prev, ...data.games]);
      setGamesListLength(data.gamesListLength);

      if (data.gamesListLength === gamesListLength) {
        setIsOver(true);
      } else {
        setIsOver(false);
      }

      return data;
    },
  });

  return {
    isLoading,
    games,
    refetch,
    isOver,
    length: gamesListLength,
  };
};

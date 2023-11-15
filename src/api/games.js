import axios from '@/utils/axios';

export async function getGames(page, isFreshGamesFirst, genre, gamesToShow) {
  try {
    const response = await axios.get(`/games`, {
      page,
      isFreshGamesFirst,
      genre,
      gamesToShow,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

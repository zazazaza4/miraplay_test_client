import axios from '@/utils/axios';

export async function getGames(page, isFreshGamesFirst, genre, gamesToShow) {
  try {
    const response = await axios.post(`/games`, {
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

import { GameList } from '@/components/game-list';

import styles from './styles.module.scss';

const Games = () => {
  return (
    <section className={styles.gamesPage}>
      <GameList />
      
    </section>
  );
};

export default Games;

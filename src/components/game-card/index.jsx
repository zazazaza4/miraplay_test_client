import { motion } from 'framer-motion';

import { Image } from '@/components/image';
import { truncateString } from '@/utils/truncate';

import styles from './styles.module.scss';

const GameCard = ({
  commonGameName,
  gameDescription,
  gameImage,
  inTop,
  genre,
}) => {
  return (
    <motion.li className={styles.card}>
      <Image src={gameImage} className={styles.img} alt="game" loading="lazy" />
      <div className={styles.info}>
        <h4 className={styles.title}>{commonGameName}</h4>
        <p className={styles.description}>
          {truncateString(gameDescription, 156)}
        </p>
      </div>

      <div className={styles.genre}>
        {inTop && <p className={styles.topItem}>TOP</p>}
        {genre && <p className={styles.genreItem}>{genre}</p>}
      </div>
    </motion.li>
  );
};

export { GameCard };

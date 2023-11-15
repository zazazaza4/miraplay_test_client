import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { Image } from '@/components/image';
import { truncateString } from '@/utils/truncate';

import styles from './styles.module.scss';

const GameCard = ({
  commonGameName,
  gameDescription,
  gameImage,
  inTop,
  genre,
  onClick,
}) => {
  return (
    <motion.li className={styles.card} onClick={onClick}>
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

GameCard.propTypes = {
  commonGameName: PropTypes.string.isRequired,
  gameDescription: PropTypes.string,
  gameImage: PropTypes.string.isRequired,
  inTop: PropTypes.bool,
  genre: PropTypes.string,
  onClick: PropTypes.func,
};

GameCard.defaultProps = {
  inTop: false,
  genre: '',
  gameDescription: '',
  onClick: null,
};

export { GameCard };

import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { PiDotsNineBold, PiCirclesFourFill } from 'react-icons/pi';

import { Button } from '@/components/button';
import { useGames } from '@/hooks/useGamesQuery';
import { GameCartSize, ButtonColor } from '@/constants/enums';
import { GameCard } from '@/components/game-card';
import { Spinner } from '@/components/spinner';
import { GameItem } from '@/components/game-item';

import { genres, sort } from './data';

import styles from './styles.module.scss';

const animation = {
  hidden: {
    y: -15,
    opacity: 0,
  },
  visible: (custom = 0) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.11, duration: 0.16 },
  }),
};

const GameList = () => {
  const [genre, setGenre] = useState('ALL');
  const [showMode, setShowMode] = useState(GameCartSize.LARGE);
  const [page, setPage] = useState(1);
  const [sortValue, setSortValue] = useState(sort.newFirst);

  const [openCard, setOpenCard] = useState(null);

  const { games, length, refetch, isLoading } = useGames(
    page,
    sortValue === sort.newFirst,
    genre,
    9
  );

  useEffect(() => {
    console.log('refetch', games);
    refetch();
  }, [page, genre, showMode, sortValue]);

  return (
    <section className={styles.games}>
      <h2 className={styles.title}>ВСІ ІГРИ</h2>
      <div className={styles.filter}>
        <ul className={styles.genres}>
          {genres.map(({ title, value }, i) => (
            <motion.li
              key={i}
              className={clsx(
                styles.genresItem,
                value === genre && styles.selected
              )}
              onClick={() => {
                setPage(1);
                setGenre(value);
              }}
              variants={animation}
              initial="hidden"
              whileInView="visible"
              custom={i}
            >
              {title}
            </motion.li>
          ))}
        </ul>

        <div className={styles.filterRight}>
          <div className={styles.sort}>
            <h5 className={styles.sizeTitle}>Сортувати: </h5>
            <select onChange={(e) => setSortValue(e.target.value)}>
              <option value={sort.newFirst}>{sort.newFirst}</option>
              <option value={sort.oldFirst}>{sort.oldFirst}</option>
            </select>
          </div>
          <div className={styles.size}>
            <h5 className={styles.sizeTitle}>Розмір: </h5>
            <button
              className={clsx(
                styles.sizeButton,
                showMode === GameCartSize.SMALL && styles.sizeButton__selected
              )}
              onClick={() => {
                setPage(1);
                setShowMode(GameCartSize.SMALL);
              }}
            >
              <PiCirclesFourFill />
            </button>
            <button
              className={clsx(
                styles.sizeButton,
                showMode === GameCartSize.LARGE && styles.sizeButton__selected
              )}
              onClick={() => {
                setPage(1);
                setShowMode(GameCartSize.LARGE);
              }}
            >
              <PiDotsNineBold />
            </button>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className={styles.loading}>
          <Spinner />
        </div>
      ) : (
        <>
          <ul className={styles.games}>
            {games.map((game) => (
              <div key={game._id} onClick={() => setOpenCard(game)}>
                <GameCard {...game} largeSize={GameCartSize.LARGE} />
              </div>
            ))}
          </ul>
          {games.length ? (
            length !== games.length && (
              <div className={styles.buttons}>
                <Button
                  isDisabled={isLoading}
                  color={ButtonColor.GREEN}
                  onClick={() => setPage((prev) => prev + 1)}
                  className={styles.button}
                >
                  Показати ще
                </Button>
              </div>
            )
          ) : (
            <div className={styles.notFound}>
              <h4 className={styles.notFoundTitle}>Нічого не знайдено</h4>
            </div>
          )}
        </>
      )}

      <GameItem
        isVisible={Boolean(openCard)}
        game={openCard}
        setCard={setOpenCard}
      />
    </section>
  );
};

export { GameList };

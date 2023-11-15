import clsx from 'clsx';
import PropTypes from 'prop-types';

import { ImageSize } from '@/constants/enums';

import styles from './styles.module.scss';

const Image = ({
  width,
  height,
  loading,
  isCircular,
  isCentered,
  src,
  alt,
  className,
  size,
}) => (
  <img
    className={clsx(
      styles.image,
      className,
      isCircular && styles.circular,
      isCentered && styles.centered,
      size && styles[`imageSize__${size}`]
    )}
    width={width}
    height={height}
    alt={alt}
    src={src}
    loading={loading}
  />
);

Image.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  isCircular: PropTypes.bool,
  isCentered: PropTypes.bool,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  loading: PropTypes.oneOf(['eager', 'lazy']),
  size: PropTypes.oneOf(Object.values(ImageSize)),
};

Image.defaultProps = {
  isCentered: false,
  isCircular: false,
  className: undefined,
  loading: undefined,
  height: undefined,
  size: undefined,
  width: undefined,
};

export { Image };

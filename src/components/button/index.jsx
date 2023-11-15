/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { ButtonType, ButtonColor } from '@/constants/enums';

import styles from './styles.module.scss';

const Button = ({
  onClick,
  className,
  type,
  color,
  isFluid,
  isSkew,
  isDisabled,
  children,
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={clsx(
        styles.btn,
        isFluid && styles.fluid,
        isSkew && styles.skew,
        color && styles[`btn__${color}`],
        className
      )}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(Object.values(ButtonType)),
  color: PropTypes.oneOf(Object.values(ButtonColor)),
  className: PropTypes.string,
  isFluid: PropTypes.bool,
  isSkew: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  type: ButtonType.BUTTON,
  onClick: null,
  children: null,
  color: null,
  className: null,
  isFluid: false,
  isSkew: false,
  isDisabled: false,
};

export { Button };

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Link = ({ to, className, children, title, target, isHover, onClick }) => {
  return (
    <RouterLink
      to={to}
      className={clsx(styles.link, isHover && styles.hover, className)}
      title={title}
      target={target}
      rel="noreferrer"
      onClick={onClick}
    >
      {children}
    </RouterLink>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  isHover: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
};

Link.defaultProps = {
  className: null,
  children: null,
  title: null,
  target: '_self',
  isHover: true,
  onClick: null,
};

export { Link };

import React from 'react';
import cn from 'classnames';

import classes from './Button.module.scss';

interface ButtonProps {
  size?: 'small' | 'default';
  color?: 'yellow' | 'blue';
  fullWidth?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, fullWidth = false, color, size = 'default' }) => {
  const classNames = cn(classes.root, {
    [classes.fullWidth]: fullWidth,
    [classes.yellow]: color === 'yellow',
    [classes.blue]: color === 'blue',
    [classes.small]: size === 'small',
  });

  return (
    <button type="button" className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

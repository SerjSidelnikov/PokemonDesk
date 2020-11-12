import React from 'react';
import cn from 'classnames';

import classes from './Button.module.scss';

interface ButtonProps {
  className?: string;
  size?: 'small' | 'default';
  color?: 'yellow' | 'blue';
  fullWidth?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  onClick,
  fullWidth = false,
  color,
  size = 'default',
}) => {
  const classNames = cn(classes.root, className, {
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

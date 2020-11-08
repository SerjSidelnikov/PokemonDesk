import React from 'react';
import cn from 'classnames';

import classes from './Heading.module.scss';

interface HeadingProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, variant = 'h1', className = null }) => {
  const Tag = variant;

  return <Tag className={cn(classes.root, className)}>{children}</Tag>;
};

export default Heading;

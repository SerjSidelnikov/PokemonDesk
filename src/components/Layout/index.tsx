import React from 'react';
import cn from 'classnames';

import classes from './Layout.module.scss';

interface LayoutProps {
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ className = null, children }) => {
  return <main className={cn(classes.root, className)}>{children}</main>;
};

export default Layout;

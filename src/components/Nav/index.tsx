import React from 'react';
import cn from 'classnames';

import classes from './Nav.module.scss';

const Nav: React.FC = () => {
  return (
    <nav>
      <ul className={classes.list}>
        <li>
          <a href="/" className={cn(classes.link, classes.linkActive)}>
            Home
          </a>
        </li>
        <li>
          <a href="/" className={classes.link}>
            Pokédex
          </a>
        </li>
        <li>
          <a href="/" className={classes.link}>
            Legendaries
          </a>
        </li>
        <li>
          <a href="/" className={classes.link}>
            Documentation
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

import React from 'react';
import cn from 'classnames';

import classes from './Nav.module.scss';

import Logo from '../../images/svg/Logo.svg';

interface Props {
  open: boolean;
}

const Nav: React.FC<Props> = ({ open }: Props) => {
  return (
    <nav className={cn(classes.nav, { [classes.open]: open })}>
      <img className={classes.logo} src={Logo} alt="Pokemon" />

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

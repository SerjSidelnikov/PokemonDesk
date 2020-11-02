import React from 'react';

import classes from './Header.module.scss';

import Logo from '../../images/svg/Logo.svg';
import Nav from '../Nav';

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <img className={classes.logo} src={Logo} alt="Pokemon" />

        <Nav />
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import cn from 'classnames';

import classes from './Header.module.scss';

import Logo from '../../images/svg/Logo.svg';
import Nav from '../Nav';

const Header: React.FC = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);

  const handleToggle = (): void => {
    setToggle((prev) => !prev);
  };

  return (
    <header className={cn(classes.header, { [classes.overlay]: toggle })}>
      <div className={classes.container}>
        <img className={classes.logo} src={Logo} alt="Pokemon" />

        <button className={cn(classes.toggleMenu, { [classes.toggle]: toggle })} type="button" onClick={handleToggle}>
          <span>Menu</span>
        </button>

        <Nav open={toggle} />
      </div>
    </header>
  );
};

export default Header;

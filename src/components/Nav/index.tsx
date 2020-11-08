import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import Logo from '../../assets/images/svg/Logo.svg';

import classes from './Nav.module.scss';

interface Props {
  open: boolean;
}

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '/',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '/pokedex',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '/legendaries',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '/documentation',
  },
];

const Nav: React.FC<Props> = ({ open }: Props) => {
  return (
    <nav className={cn(classes.nav, { [classes.open]: open })}>
      <img className={classes.logo} src={Logo} alt="Pokemon" />

      <ul className={classes.list}>
        {MENU.map(({ id, value, link }) => (
          <li key={id}>
            <NavLink to={link} className={classes.link} activeClassName={classes.linkActive} exact>
              {value}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

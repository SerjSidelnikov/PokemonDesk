import React from 'react';

import Home from './pages/Home';
import Pokedex from './pages/Pokedex';

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

interface IGeneralMenu {
  title: string;
  link: string;
  component: () => JSX.Element;
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    link: '/',
    component: () => <Home />,
  },
  {
    title: 'Pokédex',
    link: '/pokedex',
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: '/legendaries',
    component: () => <Pokedex />,
  },
  {
    title: 'Documentation',
    link: '/documentation',
    component: () => <Pokedex />,
  },
];

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;

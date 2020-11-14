import React from 'react';

import Home from './pages/Home';
import Pokedex from './pages/Pokedex';

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

interface IGeneralMenu {
  title: string;
  link: LinkEnum;
  component: () => JSX.Element;
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <Home />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <Pokedex />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <Pokedex />,
  },
];

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;

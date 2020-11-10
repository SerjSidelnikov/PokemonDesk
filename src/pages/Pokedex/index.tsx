import React from 'react';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import Filter from '../../components/Filter';
import PokemonCard from '../../components/PokemonCard';

import pokemons from './data';

import classes from './Pokedex.module.scss';

const Pokedex: React.FC = () => {
  return (
    <div className={classes.root}>
      <Header />
      <Layout className={classes.container}>
        <Heading className={classes.title}>
          800 <b>Pokemons</b> for you to choose your favorite
        </Heading>

        <input type="search" className={classes.search} placeholder="Encuentra tu pokémon..." />

        <div className={classes.filters}>
          <Filter />
          <Filter />
          <Filter />
        </div>

        <ul className={classes.list}>
          {pokemons.map((item) => (
            <li key={item.id}>
              <PokemonCard pokemon={item} />
            </li>
          ))}
        </ul>
      </Layout>
      <Footer />
    </div>
  );
};

export default Pokedex;

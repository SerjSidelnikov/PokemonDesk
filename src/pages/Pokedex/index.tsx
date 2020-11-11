import React from 'react';

import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import Filter from '../../components/Filter';
import PokemonCard from '../../components/PokemonCard';
import usePokemons from '../../hooks/usePokemons';

import classes from './Pokedex.module.scss';

const Pokedex: React.FC = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <div className={classes.root}>
      <Layout className={classes.container}>
        <Heading className={classes.title}>
          {data?.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>

        <input type="search" className={classes.search} placeholder="Encuentra tu pokémon..." />

        <div className={classes.filters}>
          <Filter />
          <Filter />
          <Filter />
        </div>

        <ul className={classes.list}>
          {data?.pokemons.map((item) => (
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

import React from 'react';

import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import Filter from '../../components/Filter';
import PokemonCard, { Pokemon } from '../../components/PokemonCard';
import useData from '../../hooks/useData';

import classes from './Pokedex.module.scss';

interface PokemonResponse {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: Pokemon[];
}

const Pokedex: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [query, setQuery] = React.useState<{ [key: string]: string | number }>({ limit: 12 });

  const { data, isLoading, isError } = useData<PokemonResponse>('getPokemons', query, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
    setQuery((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <div className={classes.root}>
      <Layout className={classes.container}>
        <Heading className={classes.title}>
          {data?.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>

        <input
          value={searchValue}
          onChange={handleSearchChange}
          type="search"
          className={classes.search}
          placeholder="Encuentra tu pokémon..."
        />

        <div className={classes.filters}>
          <Filter />
          <Filter />
          <Filter />
        </div>

        {isLoading ? (
          <div className={classes.loading}>Loading..</div>
        ) : (
          <ul className={classes.list}>
            {data?.pokemons.map((item) => (
              <li key={item.id}>
                <PokemonCard pokemon={item} />
              </li>
            ))}
          </ul>
        )}
      </Layout>
      <Footer />
    </div>
  );
};

export default Pokedex;

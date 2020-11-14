import React from 'react';

import { Pokemon } from '../components/PokemonCard';

interface IResponse {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: Pokemon[];
}

const usePokemons = () => {
  const [data, setData] = React.useState<IResponse | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons?limit=12');
        const result = await response.json();

        setData(result);
      } catch (e) {
        setIsError(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export default usePokemons;

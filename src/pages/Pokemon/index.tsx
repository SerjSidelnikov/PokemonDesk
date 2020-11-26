import React from 'react';

import useData from '../../hooks/useData';
import { IPokemon } from '../../interface/pokemons';
import toCapitalizeFirstLetter from '../../utils/toCapitalizeFirstLetter';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<IPokemon>('getPokemon', { id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>This is pokemon id equal {data && toCapitalizeFirstLetter(data.name)}</div>;
};

export default Pokemon;

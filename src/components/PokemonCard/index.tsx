import React from 'react';

import Heading from '../Heading';

import classes from './PokemonCard.module.scss';

interface Pokemon {
  nameClean: string;
  abilities: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    'special-attack': number;
    'special-defense': number;
    speed: number;
  };
  types: string[];
  img: string;
  name: string;
  baseExperience: number;
  height: number;
  id: number;
  isDefault: boolean;
  order: number;
  weight: number;
}

interface Props {
  pokemon: Pokemon;
}

const color: { [key: string]: string } = {
  grass: '#73d677',
  poison: '#07d6f2',
  fire: '#d93e30',
  flying: '#07d6f2',
  water: '#73d677',
  bug: '#f28f16',
};

const imgColor: { [key: string]: string } = {
  grass: 'linear-gradient(270deg, #5BC7FA 0.15%, #35BAFF 100%)',
  poison: 'linear-gradient(270deg, #5BC7FA 0.15%, #35BAFF 100%)',
  fire: 'linear-gradient(270deg, #B33327 0.15%, #d93e30 100%)',
  flying: 'linear-gradient(270deg, #F89EAE 0.15%, #F4B5C1 100%)',
  water: 'linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%)',
  bug: 'linear-gradient(270deg, #F2CB07 0.15%, #F2B807 100%)',
};

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className={classes.root}>
      <div className={classes.infoWrap}>
        <Heading variant="h2" className={classes.title}>
          {pokemon.name}
        </Heading>

        <div className={classes.statWrap}>
          <div className={classes.statItem}>
            <div className={classes.statValue}>{pokemon.stats.attack}</div>
            Attack
          </div>
          <div className={classes.statItem}>
            <div className={classes.statValue}>{pokemon.stats.defense}</div>
            Defense
          </div>
        </div>

        <div className={classes.labelWrap}>
          {pokemon.types.map((type) => (
            <span key={`${type}-${Math.random()}`} className={classes.label} style={{ backgroundColor: color[type] }}>
              {type}
            </span>
          ))}
        </div>
      </div>

      <div className={classes.pictureWrap} style={{ background: imgColor[pokemon.types[0]] }}>
        <img src={pokemon.img} alt={pokemon.name} />
      </div>
    </div>
  );
};

export default PokemonCard;

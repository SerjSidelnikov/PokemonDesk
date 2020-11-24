import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('getUrlWithParamsConfig', () => {
  test('Должна принимать два аргумента "getPokemons" и пустой объект, на выходе получить объект с полями pathname, protocol, host и пустым query', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  });

  test('Должна принимать два аргумента "getPokemons" и { name: "Pikachu" }, на выходе получить объект с полями pathname, protocol, host и query с полями name равное Pikachu', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: { name: 'Pikachu' },
    });
  });

  test('Должна принимать два аргумента "getPokemon" и { id: 25 }, на выходе получить объект с полями pathname, protocol, host и пустым query', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {},
    });
  });
});

describe('toCapitalizeFirstLetter', () => {
  test('Должна принять строку и возвращает строку, которая начинается с заглавной буквы, делая все остальные буквы маленького регистра', () => {
    const result = toCapitalizeFirstLetter('pikachu');
    const result2 = toCapitalizeFirstLetter('pikachu best pokemon');
    const result3 = toCapitalizeFirstLetter('');
    const result4 = toCapitalizeFirstLetter(' ');

    expect(result).toEqual('Pikachu');
    expect(result2).toEqual('Pikachu best pokemon');
    expect(result3).toEqual('');
    expect(result4).toEqual(' ');
  });
});

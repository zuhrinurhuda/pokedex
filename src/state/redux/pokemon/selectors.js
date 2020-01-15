import { createSelector } from 'reselect';

import getPokemonId from 'utils/getPokemonId';
import { initialState } from './reducers';

const pokemonSelector = state => state.pokemonReducers || initialState;

const pokemonListSelector = createSelector(
  pokemonSelector,
  pokemon => pokemon.pokemonList,
);

const pokemonListDataSelector = createSelector(
  pokemonListSelector,
  pokemonList => pokemonList.results,
);

const pokemonSpeciesSelector = createSelector(
  pokemonSelector,
  pokemon => pokemon.pokemonSpecies,
);

const pokemonDetailSelector = createSelector(
  pokemonSelector,
  pokemon => pokemon.pokemonDetail,
);

export const newPokemonlistSelector = createSelector(
  pokemonListSelector,
  pokemonListDataSelector,
  pokemonSpeciesSelector,
  (pokemonList, pokemonListData, pokemonSpecies) => {
    const newPokemonListData = pokemonListData.map((pokemon, index) => {
      const id = getPokemonId(pokemon.url);
      return {
        ...pokemon,
        id: Number(id),
        image: `${process.env.REACT_APP_IMAGE_URL}${id}.png`,
        habitat: pokemonSpecies[index].habitat.name,
        color: pokemonSpecies[index].color.name,
      }
    });

    return {
      ...pokemonList,
      results: [...newPokemonListData],
    }
  },
);

export const newPokemonDetailSelector = createSelector(
  pokemonDetailSelector,
  pokemonSpeciesSelector,
  (pokemonDetail, pokemonSpecies) => {
    const filteredSpecies = pokemonSpecies.find(
      species => species.id === pokemonDetail.id
    );

    return { ...pokemonDetail, ...filteredSpecies };
  },
);

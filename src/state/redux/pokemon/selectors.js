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

export const newPokemonlistSelector = createSelector(
  pokemonListDataSelector,
  pokemonSpeciesSelector,
  (pokemonListData, pokemonSpecies) => {
    return pokemonListData.map((pokemon, index) => {
      const id = getPokemonId(pokemon.url);
      return {
        ...pokemon,
        id: Number(id),
        image: `${process.env.REACT_APP_IMAGE_URL}${id}.png`,
        habitat: pokemonSpecies[index].habitat.name,
        color: pokemonSpecies[index].color.name,
      }
    })
  },
);


const pokemonPageSelector = () => 
  createSelector(
    pokemonSelector,
    newPokemonlistSelector,
    (state, pokemonList) => ({
      ...state,
      pokemonList: {
        ...state.pokemonList,
        results: pokemonList,
      },
    }),
  );

export default pokemonPageSelector;

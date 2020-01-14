import produce from 'immer';

import {
  POKEMON_LIST_REQUESTED,
  POKEMON_LIST_SUCCEEDED,
  POKEMON_LIST_FAILED,
} from './constants';

export const initialState = {
  pokemonList: {
    params: {
      limit: 20,
      offset: 0,
    },
    isLoading: false,
    results: [],
  },
  pokemonSpecies: [],
};

const pokemonReducers = (state = initialState, action) => 
  produce(state, draft => {
    switch(action.type) {
      // Pokemon list reducers
      case POKEMON_LIST_REQUESTED:
        draft.pokemonList.params = action.params;
        draft.pokemonList.isLoading = true;
        break;
      case POKEMON_LIST_SUCCEEDED:
        draft.pokemonList = {
          ...draft.pokemonList,
          ...action.data.pokemonList,
          isLoading: false,
          results: [
            ...draft.pokemonList.results,
            ...action.data.pokemonList.results
          ],
        };
        draft.pokemonSpecies = [
          ...draft.pokemonSpecies,
          ...action.data.pokemonSpecies
        ];
        break;
      case POKEMON_LIST_FAILED:
        draft.pokemonList.isLoading = false;
        break;
      default:
        return draft;
    }
  }); 

export default pokemonReducers;

import produce from 'immer';

import {
  POKEMON_LIST_REQUESTED,
  POKEMON_LIST_SUCCEEDED,
  POKEMON_LIST_FAILED,
  POKEMON_LIST_CLEARED,
  POKEMON_DETAIL_REQUESTED,
  POKEMON_DETAIL_SUCCEEDED,
  POKEMON_DETAIL_FAILED,
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
  pokemonDetail: {
    isLoading: false,
    flavor_text_entries: [],
    color: {
      name: '',
    },
    habitat: {
      name: '',
    },
    shape: {
      name: '',
    },
    sprites: [],
    types: [],
    abilities: [],
    stats: [],
  },
};

const pokemonReducers = (state = initialState, action) => 
  produce(state, draft => {
    // console.log('action', action)
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
      case POKEMON_LIST_CLEARED:
        draft.pokemonList = initialState.pokemonList;
        draft.pokemonSpecies = initialState.pokemonSpecies;
        break;

      // Pokemon detail reducers
      case POKEMON_DETAIL_REQUESTED:
        draft.pokemonDetail.isLoading = true;
        break;
      case POKEMON_DETAIL_SUCCEEDED:
        draft.pokemonDetail = {
          ...draft.pokemonDetail,
          ...action.data.pokemonDetail,
          isLoading: false,
        };
        draft.pokemonSpecies = [action.data.pokemonSpecies];
        break;
      case POKEMON_DETAIL_FAILED:
        draft.pokemonDetail.isLoading = false;
        break;
      default:
        return draft;
    }
  }); 

export default pokemonReducers;

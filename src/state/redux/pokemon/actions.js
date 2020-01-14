import {
  POKEMON_LIST_REQUESTED,
  POKEMON_LIST_SUCCEEDED,
  POKEMON_LIST_FAILED,
} from './constants';

// Fetch pokemon list actions
export const pokemonListRequested = params => {
  return {
    type: POKEMON_LIST_REQUESTED,
    params,
  };
};

export const pokemonListSucceeded = data => {
  return {
    type: POKEMON_LIST_SUCCEEDED,
    data,
  };
};

export const pokemonListfailed = error => {
  return {
    type: POKEMON_LIST_FAILED,
    error,
  };
};

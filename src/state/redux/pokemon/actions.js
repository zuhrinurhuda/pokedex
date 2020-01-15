import {
  POKEMON_LIST_REQUESTED,
  POKEMON_LIST_SUCCEEDED,
  POKEMON_LIST_FAILED,
  POKEMON_LIST_CLEARED,
  POKEMON_DETAIL_REQUESTED,
  POKEMON_DETAIL_SUCCEEDED,
  POKEMON_DETAIL_FAILED,
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

export const pokemonListCleared = () => {
  return {
    type: POKEMON_LIST_CLEARED,
  };
};

// Fetch pokemon detail actions
export const pokemonDetailRequested = id => {
  return {
    type: POKEMON_DETAIL_REQUESTED,
    id,
  };
};

export const pokemonDetailSucceeded = data => {
  return {
    type: POKEMON_DETAIL_SUCCEEDED,
    data,
  };
};

export const pokemonDetailfailed = error => {
  return {
    type: POKEMON_DETAIL_FAILED,
    error,
  };
};

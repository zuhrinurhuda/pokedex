import { call, put, takeLatest, all } from 'redux-saga/effects';

import getPokemonId from 'utils/getPokemonId';
import {
  pokemonListApi,
  pokemonSpeciesApi,
} from 'state/api/pokemon';
import { POKEMON_LIST_REQUESTED } from './constants';
import {
  pokemonListSucceeded,
  pokemonListfailed,
} from './actions';

export function* fetchPokemonList({ params }) {
  try {
    const pokemonList = yield call(pokemonListApi, params);
    const pokemonSpecies = yield all(
      pokemonList.results.map(pokemon =>
        call(pokemonSpeciesApi, getPokemonId(pokemon.url)))
    )

    yield put(pokemonListSucceeded({ pokemonList, pokemonSpecies }));
  } catch (error) {
    yield put(pokemonListfailed(error));
  };
};

export const pokemonSaga = [
  takeLatest(POKEMON_LIST_REQUESTED, fetchPokemonList),
];

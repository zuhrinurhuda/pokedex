import { all } from 'redux-saga/effects';
import { pokemonSaga } from './pokemon/saga';

export default function* rootSaga() {
  yield all([
    ...pokemonSaga,
  ]);
};

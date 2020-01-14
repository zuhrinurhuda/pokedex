import { combineReducers } from 'redux';

import pokemonReducers from './pokemon/reducers';

const rootReducer = combineReducers({
  pokemonReducers,
});

export default rootReducer;

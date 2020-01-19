import axios from './index';
import { POKEMON } from './path';

export const pokemonListApi = async params => {
  try {
    const { data } = await axios(POKEMON.LIST, { params });
    return data;
  } catch (error) {
    throw error;
  };
};

export const pokemonSpeciesApi = async name => {
  try {
    const { data } = await axios(`${POKEMON.SPECIES}${name}`);
    return data;
  } catch (error) {
    throw error;
  };
};

export const pokemonDetailApi = async name => {
  try {
    const { data } = await axios(`${POKEMON.DETAIL}${name}`);
    return data;
  } catch (error) {
    throw error;
  };
};

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

export const pokemonSpeciesApi = async id => {
  try {
    const { data } = await axios(`${POKEMON.SPECIES}${id}`);
    return data;
  } catch (error) {
    throw error;
  };
};

export const pokemonDetailApi = async id => {
  try {
    const { data } = await axios(`${POKEMON.DETAIL}${id}`);
    return data;
  } catch (error) {
    throw error;
  };
};

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { createStructuredSelector } from 'reselect';

import { PokemonCard } from 'views/components';
import { pokemonListRequested } from 'state/redux/pokemon/actions';
import pokemonPageSelector from 'state/redux/pokemon/selectors';
import {
  PokemonListWrapper,
  PokemonCardWrapper
} from './styles';

const PokemonList = props => {
  const { fetchPokemonList, pokemon } = props;
  const { pokemonList } = pokemon;

  // console.log('props', props);
  useEffect(() => {
    fetchPokemonList(pokemonList.params);
  }, [fetchPokemonList, pokemonList.params]);

  const handleLoadMore = () => {
    fetchPokemonList({
      ...pokemonList.params,
      offset: pokemonList.params.offset + pokemonList.params.limit
    })
  };

  return (
    <PokemonListWrapper
      type="flex"
      justify="start"
      gutter={24}
    >
      {pokemonList.results.map(pokemon => (
        <PokemonCardWrapper
          key={pokemon.id}
          span={12}
        >
          <PokemonCard
            isLoading={pokemonList.isLoading}
            pokemon={pokemon}
          />
        </PokemonCardWrapper>
      ))}
      <Button
        block
        size="large"
        style={{ margin: 12 }}
        onClick={handleLoadMore}
        loading={pokemonList.isLoading}
      >
        Lihat Selebihnya
      </Button>
    </PokemonListWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  pokemon: pokemonPageSelector(),
});

const mapDispatchToProps = dispatch => ({
  fetchPokemonList: params => dispatch(pokemonListRequested(params)),
});

PokemonList.propsTypes = {
  fetchPokemonList: PropTypes.func.isRequired,
  pokemon: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);

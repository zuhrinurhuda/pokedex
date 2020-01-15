import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { PokemonCard } from 'views/components';
import { pokemonListRequested, pokemonListCleared } from 'state/redux/pokemon/actions';
import { newPokemonlistSelector } from 'state/redux/pokemon/selectors';
import { PokemonListWrapper, PokemonCardWrapper } from './styles';

const PokemonList = props => {
  const {
    fetchPokemonList,
    pokemonList,
    resetPokemonList
  } = props;
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

  useEffect(() => () => resetPokemonList(), [resetPokemonList]);

  return (
    <PokemonListWrapper
      type="flex"
      justify="start"
      gutter={12}
    >
      {pokemonList.results.map(pokemon => (
        <PokemonCardWrapper key={pokemon.id} span={12}>
          <Link to={`/${pokemon.name}`}>
            <PokemonCard pokemon={pokemon} />
          </Link>
        </PokemonCardWrapper>
      ))}
      <Button
        block
        size="large"
        style={{ margin: 6 }}
        onClick={handleLoadMore}
        loading={pokemonList.isLoading}
      >
        Lihat Selebihnya
      </Button>
    </PokemonListWrapper>
  );
};

const mapStateToProps = state => ({
  pokemonList: newPokemonlistSelector(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPokemonList: params => dispatch(pokemonListRequested(params)),
  resetPokemonList: () => dispatch(pokemonListCleared()),
});

PokemonList.propsTypes = {
  fetchPokemonList: PropTypes.func.isRequired,
  pokemonList: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);

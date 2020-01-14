import React from 'react';
import PropTypes from 'prop-types';

import { Card, Tag } from 'antd';

import habitatColors from 'utils/habitatColors';

const PokemonCard = props => {
  const { pokemon } = props;

  return (
    <Card
      hoverable
      key={pokemon.id}
      cover={<img alt={pokemon.name} src={pokemon.image} />}
      bodyStyle={{ borderTop: '1px solid #ebedf0' }}
    >
      <Card.Meta
        title={pokemon.name.toUpperCase()}
        description={
          <Tag color={habitatColors[pokemon.habitat]}>
            {pokemon.habitat}
          </Tag>
        }
      />
    </Card>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PokemonCard;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Skeleton,
  Avatar,
  Typography,
  Tag
} from 'antd';

import { pokemonDetailRequested } from 'state/redux/pokemon/actions';
import { newPokemonDetailSelector } from 'state/redux/pokemon/selectors';
import habitatColors from 'utils/habitatColors';
import { DetailCover } from './styles';

const PokemonDetail = props => {
  // console.log('props', props);
  const {
    match,
    fetchPokemonDetail,
    pokemonDetail,
  } = props;
  const pokemonName = match.params.name;
  
  useEffect(() => {
    fetchPokemonDetail(pokemonName);
  }, [fetchPokemonDetail, pokemonName]);

  return (
    <div>
      <DetailCover
        type="flex"
        align="middle"
        color={pokemonDetail.color.name}
      >
        <Avatar
          src={
            !pokemonDetail.isLoading &&
            pokemonDetail.id &&
              `${process.env.REACT_APP_IMAGE_URL}${pokemonDetail.id}.png`
          }
          size={96}
          style={{ background: 'white', marginTop: 24 }}
        />
        <Typography.Title level={3}>
          {pokemonDetail.isLoading
            ? 'Loading...'
            : pokemonDetail.name
          }
        </Typography.Title>
      </DetailCover>
      <Row style={{ padding: 24 }}>
        <Skeleton
          active
          loading={pokemonDetail.isLoading}
          avatar={false}
          paragraph={{ rows: 5 }}
        >
          <Row>
            <div>
              <strong>Description</strong>
            </div>
            <p>
              {pokemonDetail.flavor_text_entries.length 
                && pokemonDetail
                  .flavor_text_entries[pokemonDetail.flavor_text_entries.length - 1]
                  .flavor_text
              }
            </p>
          </Row>
          <Row>
            <Col span={6}>
              <div>
                <strong>Color</strong>
              </div>
              <p>{pokemonDetail.color.name}</p>
            </Col>
            <Col span={6}>
              <div>
                <strong>Shape</strong>
              </div>
              <p>{pokemonDetail.shape.name}</p>
            </Col>
            <Col span={6}>
              <div>
                <strong>Weight</strong>
              </div>
              <p>{pokemonDetail.weight}</p>
            </Col>
            <Col span={6}>
              <div>
                <strong>Height</strong>
              </div>
              <p>{pokemonDetail.height}</p>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <div>
                <strong>Habitat</strong>
              </div>
              <p>
                <Tag color={habitatColors[pokemonDetail.habitat.name]}>
                  {pokemonDetail.habitat.name}
                </Tag>
              </p>
            </Col>
          </Row>
        </Skeleton>
      </Row>
    </div>
  );
};

const mapStateToProps = state => ({
  pokemonDetail: newPokemonDetailSelector(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPokemonDetail: name => dispatch(pokemonDetailRequested(name)),
});

PokemonDetail.propTypes = {
  fetchPokemonDetail: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);

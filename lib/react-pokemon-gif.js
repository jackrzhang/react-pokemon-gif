import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react/lib/shallowCompare';

import pokemonGif from 'pokemon-gif';
import pokedexNumberToName from 'pokemon-gif/lib/pokedex-number-to-name';
import pokemonPropType from './pokemon-prop-type';

class PokemonGif extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { pokemon, height, className } = this.props;
    const name = typeof pokemon === 'string' ?
      pokemon.toLowerCase() :
      pokedexNumberToName[pokemon];

    return (
      <img
        alt={name}
        className={className}
        src={pokemonGif(name)}
        height={`${height}px`}
      />
    );
  }
}

PokemonGif.defaultProps = {
  className: '',
  height: 50
};

PokemonGif.propTypes = {
  pokemon: pokemonPropType.isRequired,
  className: PropTypes.string,
  height: PropTypes.number
};

export default PokemonGif;

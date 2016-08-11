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
    const { pokemon, width } = this.props;
    const name = typeof pokemon === 'string' ?
      pokemon.toLowerCase() :
      pokedexNumberToName[pokemon];

    return (
      <img
        alt={name}
        src={pokemonGif(name)}
        width={width}
      />
    );
  }
}

PokemonGif.defaultProps = {
  width: 300
};

PokemonGif.propTypes = {
  pokemon: pokemonPropType.isRequired,
  width: PropTypes.number
};

export default PokemonGif;

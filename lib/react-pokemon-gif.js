import { Component, PropTypes } from 'react';
import shallowCompare from 'react/lib/shallowCompare';
import pokemonGif from 'pokemon-gif';

class Pokemon extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { name, width } = this.props;

    return (
      <img
        alt={name}
        src={pokemonGif(name)}
        width={width}
      />
    );
  }
}

Pokemon.defaultProps = {
  width: 300
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number
};

export default Pokemon;

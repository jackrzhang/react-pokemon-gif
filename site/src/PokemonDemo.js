import React, { Component } from 'react';
import styles from './App.css';

import PokemonGif from './../../lib/react-pokemon-gif';

class PokemonDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Pikachu' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          className={styles.input}
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />

        <PokemonGif
          className={styles.pokemon}
          pokemon={this.state.text}
          height={100}
        />
      </div>
    );
  }
}

export default PokemonDemo;

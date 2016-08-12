import React, { Component } from 'react';
import styles from './App.css';

import PokemonGif from './../../lib/react-pokemon-gif';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <h1 className={styles.title}>react-pokemon-gif</h1>
        <div className={styles.instructions}>Instructions</div>

        <PokemonGif
          className={styles.pokemon}
          pokemon={'Pikachu'}
          height={70}
        />

      </div>
    );
  }
}

export default App;

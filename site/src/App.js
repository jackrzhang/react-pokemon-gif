import React, { Component } from 'react';
import styles from './App.css';

import Title from './Title';
import Instructions from './Instructions';
import PokemonDemo from './PokemonDemo';
import Credit from './Credit';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Title />
        <Instructions />
        <PokemonDemo />
        <Credit />
      </div>
    );
  }
}

export default App;

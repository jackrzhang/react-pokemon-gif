#react-pokemon-gif
[![npm](https://img.shields.io/npm/v/react-pokemon-gif.svg)](https://www.npmjs.com/package/react-pokemon-gif)
[![Build Status](https://travis-ci.org/jackrzhang/react-pokemon-gif.svg?branch=master)](https://travis-ci.org/jackrzhang/react-pokemon-gif)
[![dependencies Status](https://david-dm.org/jackrzhang/react-pokemon-gif/status.svg)](https://david-dm.org/jackrzhang/react-pokemon-gif)

A react.js component exposing a simple interface for animated sprites of all 721 pokemon.
Credits to the community at [Pokestadium](http://www.pokestadium.com/tools/sprites) for awesome sprites.

Try a demo at [react-pokemon-gif.jackrzhang.com](http://react-pokemon-gif.jackrzhang.com).

##Installation
```sh
$ npm install react react-dom react-pokemon-gif --save
```

##API - Props
####`pokemon` : string or number
The identifier for a specific pokemon. If type string, a [valid pokemon name](http://www.pokemon.com/us/pokedex/) is expected. If type number, a valid pokedex number (1 - 721) is expected.

###Optional
####`height` : number
The value representing the height of the sprite, in pixels.

####`className` : string
The class name to be added to image element.

##Example
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import PokemonGif from 'react-pokemon-gif';

ReactDOM.render(
  <PokemonGif 
    pokemon={'Pikachu'}
    height={150}
  />,
  document.getElementById('react-root')
);

```

##Contributing
Issues and pull requests are welcome.
```sh
$ git clone https://github.com/jackrzhang/react-pokemon-gif
$ cd react-pokemon-gif
$ npm install
$ npm start
```

**Please run linting and tests prior to commits.**
```sh
$ npm run lint
$ npm test
```

##License
[MIT](https://github.com/jackrzhang/react-pokemon-gif/blob/master/LICENSE)

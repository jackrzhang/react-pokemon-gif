*This package is deprecated. For an alternative, see [react-poke-sprites](https://github.com/anshumanv/react-poke-sprites).*

# react-pokemon-gif
[![npm](https://img.shields.io/npm/v/react-pokemon-gif.svg)](https://www.npmjs.com/package/react-pokemon-gif)
[![Build Status](https://travis-ci.org/jackrzhang/react-pokemon-gif.svg?branch=master)](https://travis-ci.org/jackrzhang/react-pokemon-gif)
[![dependencies Status](https://david-dm.org/jackrzhang/react-pokemon-gif/status.svg)](https://david-dm.org/jackrzhang/react-pokemon-gif)

This is a react component that renders an animated sprite of a pokemon. The sprites are from [Pokestadium](http://www.pokestadium.com/tools/sprites).

Try a demo at [react-pokemon-gif.jackrzhang.com](http://react-pokemon-gif.jackrzhang.com).

## Installation
```sh
$ npm install react react-dom react-pokemon-gif --save
```

## Requirements
[Node.js](https://nodejs.org) v6+

## API - Props
#### `pokemon` : string or number
The identifier for a specific pokemon. If type string, a [valid pokemon name](http://www.pokemon.com/us/pokedex/) is expected. If type number, a valid pokedex number (1 - 721) is expected.

### Optional
#### `height` : number
The value representing the height of the sprite, in pixels.

#### `className` : string
The class name to be added to image element.

## Example
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

## Contributing
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

## License
[MIT](https://github.com/jackrzhang/react-pokemon-gif/blob/master/LICENSE)

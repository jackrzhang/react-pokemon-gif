/* eslint-disable no-unused-expressions, max-len */
import React from 'react';
import { expect } from 'chai';
import { spy, stub } from 'sinon';
import { shallow, mount, render } from 'enzyme';

import PokemonGif from './../lib/react-pokemon-gif';

describe('<PokemonGif />', () => {
  it('should have props: pokemon & width', () => {
    const wrapper = shallow(<PokemonGif pokemon={25} />);
    expect(wrapper.props().pokemon).to.be.defined;
    expect(wrapper.props().width).to.be.defined;
  });

  // Stub on console.error to spy on and supress output from React PropTypes warnings
  it('should require `pokemon` prop to be supplied', () => {
    const errorStub = stub(console, 'error');

    try {
      shallow(<PokemonGif />);
    } catch (e) {
      // catch TypeErrors thrown by pokemon-gif module
    } finally {
      expect(errorStub.calledWithExactly(
        'Warning: Failed prop type: Required prop `pokemon` was not specified in `PokemonGif`.\n    in PokemonGif'
      )).to.equal(true);
      console.error.restore();
    }
  });

  it('should validate `pokemon` prop to be of type string or number', () => {
    const errorStub = stub(console, 'error');

    try {
      shallow(<PokemonGif pokemon={[]} />);
    } catch (e) {
      // catch TypeErrors thrown by pokemon-gif module
    } finally {
      expect(errorStub.calledWithExactly(
        'Warning: Failed prop type: Invalid prop `pokemon` supplied to `PokemonGif`.\n    Prop `pokemon` must be of type string or number.\n    in PokemonGif'
      )).to.equal(true);
      console.error.restore();
    }
  });

  it('should validate `pokemon` prop of type string to be a valid pokemon name', () => {
    const errorStub = stub(console, 'error');

    try {
      shallow(<PokemonGif pokemon={'invalidPokemonName'} />);
    } catch (e) {
      // catch TypeErrors thrown by pokemon-gif module
    } finally {
      expect(errorStub.calledWithExactly(
        'Warning: Failed prop type: Invalid prop `pokemon` supplied to `PokemonGif`.\n        Prop `pokemon` must be a valid pokemon name.\n    in PokemonGif'
      )).to.equal(true);
      console.error.restore();
    }
  });

  it('should validate `pokemon` prop of type number to be a valid pokedex number', () => {
    const errorStub = stub(console, 'error');

    try {
      shallow(<PokemonGif pokemon={14.2} />);
    } catch (e) {
      // catch TypeErrors thrown by pokemon-gif module
    } finally {
      expect(errorStub.calledWithExactly(
        'Warning: Failed prop type: Invalid prop `pokemon` supplied to `PokemonGif`.\n        Prop `pokemon` must be a valid pokedex number.\n    in PokemonGif'
      )).to.equal(true);
      console.error.restore();
    }
  });

  it('should call shouldComponentUpdate using shallowCompare', () => {
    spy(PokemonGif.prototype, 'shouldComponentUpdate');
    spy(PokemonGif.prototype, 'render');

    const wrapper = mount(<PokemonGif pokemon={25} />);
    expect(PokemonGif.prototype.shouldComponentUpdate).to.have.property('callCount', 0);
    expect(PokemonGif.prototype.render).to.have.property('callCount', 1);

    wrapper.setProps({ pokemon: 25 });
    expect(PokemonGif.prototype.shouldComponentUpdate).to.have.property('callCount', 1);
    expect(PokemonGif.prototype.render).to.have.property('callCount', 1);

    wrapper.setProps({ pokemon: 26 });
    expect(PokemonGif.prototype.shouldComponentUpdate).to.have.property('callCount', 2);
    expect(PokemonGif.prototype.render).to.have.property('callCount', 2);

    PokemonGif.prototype.shouldComponentUpdate.restore();
    PokemonGif.prototype.render.restore();
  });

  it('should render an img element', () => {
    const wrapper = shallow(<PokemonGif pokemon={25} />);
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should render with alternate text of the pokemon\'s name', () => {
    const wrapper1 = render(<PokemonGif pokemon={25} />);
    expect(wrapper1.find('img')[0].attribs.alt).to.equal('pikachu');

    const wrapper2 = render(<PokemonGif pokemon={'blastoise'} />);
    expect(wrapper2.find('img')[0].attribs.alt).to.equal('blastoise');
  });
});

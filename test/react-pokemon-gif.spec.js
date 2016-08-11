/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow, mount, render } from 'enzyme';

import PokemonGif from './../lib/react-pokemon-gif';

describe('<PokemonGif />', () => {
  it('has props: pokemon & width', () => {
    const wrapper = shallow(<PokemonGif pokemon={25} />);
    expect(wrapper.props().pokemon).to.be.defined;
    expect(wrapper.props().width).to.be.defined;
  });

  it('calls shouldComponentUpdate using shallowCompare', () => {
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

  it('renders an img element', () => {
    const wrapper = shallow(<PokemonGif pokemon={25} />);
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('renders with alternate text of the pokemon\'s name', () => {
    const wrapper1 = render(<PokemonGif pokemon={25} />);
    expect(wrapper1.find('img')[0].attribs.alt).to.equal('pikachu');

    const wrapper2 = render(<PokemonGif pokemon={'blastoise'} />);
    expect(wrapper2.find('img')[0].attribs.alt).to.equal('blastoise');
  });
});

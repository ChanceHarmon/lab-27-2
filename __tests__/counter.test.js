import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from '../counter/counter';

Enzyme.configure({ adapter: new Adapter() });

describe('Counter renders', () => {
  const wrapper = shallow(<Counter />);

  test('Counter renders', () => {
    expect(wrapper.find('#currentScore').exists()).toEqual(true);
    expect(wrapper.find('#counterWrap').exists()).toEqual(true);
    expect(wrapper.find('#likeButton').exists()).toEqual(true);
    expect(wrapper.find('#dislikeButton').exists()).toEqual(true);
    expect(wrapper.find('#buttonWrap').exists()).toEqual(true);
  })
});

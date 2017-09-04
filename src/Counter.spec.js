import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('<Counter />', () => {
  it('should has 2 buttons', () => {
    const component = shallow(<Counter />);
    expect(component.find('button')).toHaveLength(2);
  });
});
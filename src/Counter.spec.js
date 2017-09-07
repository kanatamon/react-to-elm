import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('<Counter />', () => {
  it('should has a View', () => {
    const component = shallow(<Counter />);
    expect(component.find('View')).toHaveLength(1);
  });
});
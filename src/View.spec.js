import React from 'react';
import { shallow } from 'enzyme';
import View from './View';

describe('<View />', () => {
  it('should has 2 buttons', () => {
    const component = shallow(<View counter={0} onAction={() => {}}/>);
    expect(component.find('button')).toHaveLength(2);
  });

  it('should has counter value of 0', () => {
    const component = shallow(<View counter={0} onAction={() => {}}/>);
    expect(component.find('h1').text()).toBe('0');
  })

  it('should has counter value of 10', () => {
    const component = shallow(<View counter={10} onAction={() => {}}/>);
    expect(component.find('h1').text()).toBe('10');
  })
});
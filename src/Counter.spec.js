import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('<Counter />', () => {
  it('should has 2 buttons', () => {
    const component = shallow(<Counter />);
    expect(component.find('button')).toHaveLength(2);
  });

  it('should has default value with 0', () => {
    const component = shallow(<Counter />);
    expect(component.find('h1').text()).toBe('0');
  });

  it('should increase value from 0 => 1', () => {
    const component = shallow(<Counter />);
    component.find('button.add').simulate('click');
    expect(component.find('h1').text()).toBe('1');
  });

  it('should increase value from 0 => 2', () => {
    const component = shallow(<Counter />);
    component.find('button.add').simulate('click');
    component.find('button.add').simulate('click');
    expect(component.find('h1').text()).toBe('2');
  });

  it('should decrease value from 0 => -1', () => {
    const component = shallow(<Counter />);
    component.find('button.minus').simulate('click');
    expect(component.find('h1').text()).toBe('-1');
  });

  it('should decrease value from 0 => -2', () => {
    const component = shallow(<Counter />);
    component.find('button.minus').simulate('click');
    component.find('button.minus').simulate('click');
    expect(component.find('h1').text()).toBe('-2');
  });
});
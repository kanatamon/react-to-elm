import React from 'react';
import { shallow } from 'enzyme';
import View from './View';
import { INCREMENT, DECREMENT } from './actions';

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

  it('should container INCREMENT when add button is clicked', () => {
    const calledMessages = [];
    const onAddButtonClick = () => calledMessages.push(INCREMENT);
    const component = shallow(<View counter={0} onAddButtonClick={onAddButtonClick} />);
    component.find('button.add').simulate('click');
    expect(calledMessages).toContain(INCREMENT);
  });

  it('should container DECREMENT when minus button is clicked', () => {
    const calledMessages = [];
    const onMinusButtonClick = () => calledMessages.push(DECREMENT);
    const component = shallow(<View counter={0} onMinusButtonClick={onMinusButtonClick} />);
    component.find('button.minus').simulate('click');
    expect(calledMessages).toContain(DECREMENT);
  });
});











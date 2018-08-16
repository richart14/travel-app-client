
import React from 'react';
import { shallow } from 'enzyme';
import { PlanEdit } from './plan-edit';



describe('<PlanEdit />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<PlanEdit />);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { PlanEdit } from './plan-edit';



describe('<PlanEdit />', () => {
  it('should render without crashing', () => {
    const match = {params: {id:1}};
    const mock = jest.fn();
    const wrapper = shallow(<PlanEdit match={match} dispatch={mock}/>);
  });
});
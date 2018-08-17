
import React from 'react';
import { shallow } from 'enzyme';

import { PlanForm } from './planForm';

describe('<PlanForm />', () => {
  it('should render without crashing', () => {
    const match = {params: {id:1}};
    const wrapper = shallow(<PlanForm match={match}/>);
  });
});
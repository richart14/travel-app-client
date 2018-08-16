
import React from 'react';
import { shallow } from 'enzyme';

import { PlanForm } from './planForm';

describe('<PlanForm />', () => {
  it('should render without crashing', () => {
    shallow(<PlanForm />);
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import { TripEdit } from './tripEdit';

describe('<TripEdit />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<TripEdit />);
  });
});
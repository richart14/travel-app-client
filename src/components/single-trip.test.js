
import React from 'react';
import { shallow } from 'enzyme';

import SingleTrip from './single-trip';

describe('<SingleTrip />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<SingleTrip />);
  });
});
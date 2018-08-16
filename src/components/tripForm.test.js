
import React from 'react';
import { shallow } from 'enzyme';

import { TripForm } from './tripForm';

describe('<TripForm />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<TripForm />);
  });
});
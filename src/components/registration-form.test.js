/* global jest */

import React from 'react';
import { shallow } from 'enzyme';

import { RegistrationForm } from './registration-form';

describe('<RegistrationForm />', () => {
  it('should render without crashing', () => {
    const mock = jest.fn();
    const wrapper = shallow(<RegistrationForm handleSubmit={mock}/>);
  });
});
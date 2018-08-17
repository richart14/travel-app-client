
import React from 'react';
import { shallow } from 'enzyme';

import { TripEdit } from './tripEdit';

describe('<TripEdit />', () => {
  it('should render without crashing', () => {
    const match = {params: {id:1}};
    const mock = jest.fn();
    const wrapper = shallow(<TripEdit match={match} dispatch={mock} handleSubmit={mock}/>);
  });
});
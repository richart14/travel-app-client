
import React from 'react';
import { shallow } from 'enzyme';

import { TripForm } from './tripForm';

describe('<TripForm />', () => {
  it('should render without crashing', () => {
    const match = {params: {id:1}};
    const mock = jest.fn();
    const wrapper = shallow(<TripForm match={match} dispatch={mock} handleSubmit={mock}/>);
  });
});
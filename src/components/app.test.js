import React from 'react';
import {shallow} from 'enzyme';

import App from './app';

describe('<App />', () => {
  it('Render without crashing', () => {
    const wrapper = shallow(<App />);
    // console.log(wrapper.debug());
  });
});
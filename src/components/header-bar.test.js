import React from 'react';
import {shallow, mount} from 'enzyme';

import {HeaderBar} from './header-bar';

describe('<HeaderBar />', () => {
  it('Render without crashing', () => {
    shallow(<HeaderBar />);
  });
});
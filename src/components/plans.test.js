
import React from 'react';
import { shallow } from 'enzyme';

import {SinglePlan} from './plans';

describe('<SinglePlan />', () => {
  it('should render without crashing', () => {
    const planList = [];
    const wrapper = shallow(<SinglePlan planList={planList}/>);
  });
});
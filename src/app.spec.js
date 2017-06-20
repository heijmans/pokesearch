import { mount } from 'enzyme';
import React from 'react';
import App from './app';

it('renders', () => {
  const w = mount(<App />);
  expect(w.find('h1').text()).toEqual('React');
});

import { mount } from 'enzyme';
import React from 'react';
import App from './app';
import service from './service';
import cards from './fixtures/cards';

it('renders', () => {
  const w = mount(<App />);
  expect(w.find('h1').text()).toEqual('Pokemon Search');
});

it('search', async () => {
  const w = mount(<App />);
  const search = q => w.find('input').prop('onChange')({ target: { value: q }});
  const img = () => w.find('img');

  service.getCards = jest.fn().mockReturnValue(Promise.resolve(cards));
  await search('bulb');
  expect(img().length).toBe(2);
  expect(img().at(0).prop('src')).toBe('bulb.png');

  search('bu');
  expect(img().length).toBe(0);
});

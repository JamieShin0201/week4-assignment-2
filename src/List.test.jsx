import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

test('List', () => {
  const restaurants = [
    {
      name: '마녀주방',
      classification: '한식',
      location: '서울시 강남구',
    },
    {
      name: '시카고피자',
      classification: '양식',
      location: '이태원동',
    },
  ];

  const { container } = render((
    <List
      restaurants={restaurants}
    />
  ));

  restaurants.forEach(({ name, classification, location }) => {
    expect(container).toHaveTextContent(name);
    expect(container).toHaveTextContent(classification);
    expect(container).toHaveTextContent(location);
  });
});

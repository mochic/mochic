import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../NavBar';
import renderer from 'react-test-renderer';

it('renders deep', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  expect(tree).toMatchSnapshot();
});

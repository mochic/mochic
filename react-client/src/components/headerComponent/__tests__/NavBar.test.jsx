import React from 'react';
import NavBar from '../NavBar';
import renderer from 'react-test-renderer';

it('renders deep', () => {
  const tree = renderer.create(<NavBar />);
  expect(tree).toMatchSnapshot();
});

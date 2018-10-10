import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

it('renders deep', () => {
  const tree = renderer.create(<App />);
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import Footer from '../Footer';
import renderer from 'react-test-renderer';

it('renders deep', () => {
  const tree = renderer.create(<Footer />);
  expect(tree).toMatchSnapshot();
});

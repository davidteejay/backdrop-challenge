import renderer from 'react-test-renderer'

it('renders correctly across screens', () => {
  const tree = renderer.create().toJSON();
  expect(tree).toMatchSnapshot();
});

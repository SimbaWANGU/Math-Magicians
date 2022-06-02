import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

it('Renders correctly', () => {
  const component = renderer.create(
    <Navbar />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

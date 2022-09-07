import { ConnectionStatus } from './ConnectionStatus';
import renderer from 'react-test-renderer';

// TODO do more tests for everything
test('ConnectionStatus connected', () => {
  const fragment = renderer
    .create(<ConnectionStatus connected={true} />)
    .toJSON();
  expect(fragment).toMatchSnapshot();
});

test('ConnectionStatus disconnected', () => {
  const fragment = renderer
    .create(<ConnectionStatus connected={false} />)
    .toJSON();
  expect(fragment).toMatchSnapshot();
});

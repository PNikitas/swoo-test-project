import { render } from '@testing-library/react';
import WrappedApp from './App';

test('Tests Redux store', () => {
  render(<WrappedApp />);
});

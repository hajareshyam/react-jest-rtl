import { render, screen } from '@testing-library/react';
import Signin from './Signin';

test('renders the app component', () => {
  render(<Signin />);
  expect(screen.getByText('Login')).toHaveTextContent('Login')
});



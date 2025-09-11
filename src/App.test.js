import { render, screen } from '@testing-library/react';
import App from './App';

test('renders healthcare portal with welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Hi! Welcome to Healthcare Portal/i);
  expect(welcomeElement).toBeInTheDocument();
});

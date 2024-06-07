// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders register header', () => {
  render(<App />);
  const headerElement = screen.getByText(/register/i);
  expect(headerElement).toBeInTheDocument();
});
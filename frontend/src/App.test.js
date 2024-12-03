import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  console.log('CI funcionando, eita nóis!');
  const linkElement = screen.getByText(/Aprendendo Docker-compose \- Trybe/i);
  expect(linkElement).toBeInTheDocument();
});

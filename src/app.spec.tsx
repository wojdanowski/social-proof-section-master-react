import { App } from '@/app';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

it('Test', () => {
  render(<App />);

  const button = screen.getByRole('button');
  expect(button).toBeEnabled();
});

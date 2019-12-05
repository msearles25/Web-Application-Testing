import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('strikes is rendered to the screen', () => {
  const { getByText } = render(<App />);

  getByText(/strikes/i)
})

test('The scoreboard is rendered', () => {
  const {getByTestId} = render(<App />);

  getByTestId(/scoreboard/i)
})


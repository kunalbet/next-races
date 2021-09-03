import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the application title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Next Races To Go/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders horse racing tab', () => {
  render(<App />);
  const linkElement = screen.getByText(/Horse Racing/);
  expect(linkElement).toBeInTheDocument();
});

test('renders Greyhound Racing tab', () => {
  render(<App />);
  const linkElement = screen.getByText(/Greyhound Racing/);
  expect(linkElement).toBeInTheDocument();
});

test('renders Harness Racing tab', () => {
  render(<App />);
  const linkElement = screen.getByText(/Harness Racing/);
  expect(linkElement).toBeInTheDocument();
});

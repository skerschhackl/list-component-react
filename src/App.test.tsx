
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders headline', () => {
  render(<App />);
  const headline = screen.getByText(/Cats of 2022/i);
  expect(headline).toBeInTheDocument();
});

test('renders copyright', () => {
  render(<App />);
  const copy = screen.getByText(/Copyright/i);
  expect(copy).toBeInTheDocument();
});

const mockData = [{
  "_id": "aaa",
  "tags": ["gif"],
  "owner": "null",
  "createdAt": "Wed Jun 01 2022 22:29:22 GMT+0000 (Coordinated Universal Time)",
  "updatedAt": "Tue Oct 11 2022 07:52:32 GMT+0000 (Coordinated Universal Time)"
}];

test('on page load the loading spinner is shown', async () => {
  render(<App />);
  expect(screen.queryByTestId('loading-spinner')).toBeInTheDocument()
});

test('loading spinner is not shown after api has been called', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData)})
  ) as jest.Mock;
  
  render(<App />);
  await waitFor(() => {
    expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument();
  });
});

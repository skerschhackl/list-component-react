import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ListImage from './ListImage';

describe('ListImage', () => {
  it('renders a loading icon initially', () => {
    render(<ListImage imageId="123" />);
    
    const loadingIcon = screen.getByTestId('loading-icon');
    expect(loadingIcon).toBeInTheDocument();
  });

  it('renders the image when successfully loaded', async () => {
    render(<ListImage imageId="456" />);
    
    const imageElement = await screen.findByAltText('456');
    expect(imageElement).toBeInTheDocument();
  });

  it('renders a broken image icon on error', async () => {
    render(<ListImage imageId="invalid-src" />);
    const imgElement = await screen.findByAltText('invalid-src');
    fireEvent.error(imgElement);

    const brokenImageIcon = await screen.findByTestId('broken-image-icon');
    expect(brokenImageIcon).toBeInTheDocument();
  });
});

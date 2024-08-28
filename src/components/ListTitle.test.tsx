import React from 'react';
import { render, screen } from '@testing-library/react';
import ListTitle from './ListTitle';

describe('ListTitle', () => {
  it('displays owner name correctly', () => {
    render(<ListTitle owner="Goat" createdAt='2022' updatedAt='2022' isMobile={false} />);
    
    const ownerElement = screen.getByText(/Goat/i);
    expect(ownerElement).toBeInTheDocument();
  });

  it('displays "unknown" if owner is "null"', () => {
    render(<ListTitle owner="null" createdAt='2022' updatedAt='2022' isMobile={false} />);
    
    const ownerElement = screen.getByText(/unknown/i);
    expect(ownerElement).toBeInTheDocument();
  });

/** todo: add tests for tooltip? displaying icon on desktop / mobile */

});

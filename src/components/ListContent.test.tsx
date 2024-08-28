import React from 'react';
import { render, screen } from '@testing-library/react';
import ListContent from './ListContent';

describe('ListContent', () => {
  it('renders TagList component with provided tags', () => {
    render(<ListContent tags={['cat', 'dog']}/>);
    
    const tagListElement = screen.getByTestId('tag-container');
    expect(tagListElement).toBeInTheDocument();
  });
});

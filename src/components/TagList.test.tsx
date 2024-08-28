import React from 'react';
import { render, screen } from '@testing-library/react';
import TagList from './TagList';

describe('TagList', () => {
  it('renders a list of tags', () => {
    const tags = ['Cat', 'Kitten', 'Kitty'];
    render(<TagList tags={tags} />);

		tags.forEach(tag => {
      expect(screen.getByText(`#${tag}`)).toBeInTheDocument();
    });
  });

  it('renders the correct number of tags', () => {
    const tags = ['Cat', 'Kitten', 'Kitty'];
    render(<TagList tags={tags} />);

    const tagElements = screen.getAllByText(/#/);
    expect(tagElements.length).toBe(tags.length);
  });
});
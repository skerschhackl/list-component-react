import React from 'react';
import { render } from '@testing-library/react';
import ListView from './ListView';
import { IListItem } from '../types/listItem';

const items: IListItem[] = [
  {
    _id: '1',
    createdAt: '2022-01-01',
    updatedAt: '2022-01-02',
    owner: 'John Doe',
    tags: ['tag1', 'tag2']
  },
  {
    _id: '2',
    createdAt: '2022-01-03',
    updatedAt: '2022-01-04',
    owner: 'Jane Doe',
    tags: ['tag3', 'tag4']
  }
];

describe('ListView', () => {
  it('renders a list of images', () => {
    const { container } = render(<ListView items={items} />);
    expect(container.querySelectorAll('img').length).toBe(2);
  });

  it('renders list titles and contents', () => {
    const { container } = render(<ListView items={items} />);
    expect(container.querySelectorAll('.list-title').length).toBe(2);
    expect(container.querySelectorAll('.list-content').length).toBe(2);
  });

  it('calls ListImage component with correct imageId', () => {
    const { container } = render(<ListView items={items} />);
    expect(container.querySelectorAll('img').forEach((img, id) => expect(img.src).toContain(items[id]._id)));
  });


}); 
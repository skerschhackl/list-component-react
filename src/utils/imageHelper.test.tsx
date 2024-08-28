import React from 'react';
import { getListImageUrl } from './imageHelper';

describe('getListImageUrl', () => {
  it('returns the correct URL when given a valid imageId', () => {
    const imageId = '12345';
    const expectedUrl = 'https://cataas.com/cat/12345?type=square';
    expect(getListImageUrl({ imageId })).toBe(expectedUrl);
  });

  it('returns the correct URL when given an invalid imageId', () => {
    const imageId = '';
    const expectedUrl = 'https://cataas.com/cat/?type=square';
    expect(getListImageUrl({ imageId })).toBe(expectedUrl);
  });
});
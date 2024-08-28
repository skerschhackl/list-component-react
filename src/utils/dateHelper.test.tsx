import React from 'react';
import { formatDate, formatDateTime } from './dateHelper';

describe('dateHelper', () => {
  const inputString = 'Sun May 01 2022 20:57:11 GMT+0000 (Coordinated Universal Time)';

	describe('formatDate', () => {
		it('should return the correct formatted date', () => {
			const formattedDate = formatDate({ dateString: inputString });
			expect(formattedDate).toBe('May 1, 2022');
		});
	});

	describe('formatDateTime', () => {
		it('should return the correct formatted date and time', () => {
			const formattedDate = formatDateTime({ dateString: inputString });
			expect(formattedDate).toBe('May 1, 2022, 1:57 PM');
		});
	});
});
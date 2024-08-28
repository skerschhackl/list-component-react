interface DateHelperProps {
	dateString: string;
}

export const formatDateTime = ({ dateString }: DateHelperProps) => {
	const date = formatDate({ dateString: dateString });
	const time = new Date(dateString).toLocaleTimeString('en', {
		hourCycle: "h12",
		minute: "2-digit",
		hour: "numeric",
	});
	return `${date}, ${time}`;
};

export const formatDate = ({ dateString }: DateHelperProps) => {
	const format: Intl.DateTimeFormatOptions = {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	}
	return new Date(dateString).toLocaleDateString(undefined, format);
};
export const calculateTimeDiff = (date1, date2) => {
	return new Date(date2).getTime() - new Date(date1).getTime();
};

export const calculateDiffInDays = (date1, date2) => {
	const time = calculateTimeDiff(date1, date2);
	const days = Math.floor(time / (1000 * 3600 * 24));
	return days < 1
		? 'less than a day ago'
		: days == 1
		? `${days} day ago`
		: `${days} days ago`;
};

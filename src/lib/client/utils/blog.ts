export const getReadingTime = (text: string, readingSpeed = 350) => {
	return text.length < readingSpeed ? 1 : (text.length / 350).toFixed(0);
};

function isLeapYear(year) {
	const IS_INTEGER = Number.isInteger(year);
	const IS_NEGATIVE = year < 0;

	if (!IS_INTEGER || IS_NEGATIVE) return false;

	const IS_DIV_FOUR = year % 4 === 0;
	const IS_DIV_HUNDRED = year % 100 === 0;
	const IS_DIV_FOUR_HUNDRED = year % 400 === 0;

	if (IS_DIV_FOUR && !IS_DIV_HUNDRED) return true;

	if (IS_DIV_HUNDRED && IS_DIV_FOUR_HUNDRED) return true;

	return false;
}

console.log(isLeapYear(-2024));

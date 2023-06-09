function findLargestPalindrome(words: string[]) {
	const REVERSE_WORDS = words.map((word) => reverseWord(word));
	const PALINDROMES = REVERSE_WORDS.filter((reverse, i) => {
		const ORIGINAL = words[i];

		if (ORIGINAL === reverse) return ORIGINAL;
	});

	if (!PALINDROMES.length) return null;

	let theLargestPalindrome = PALINDROMES[0];

	for (const PALINDROME of PALINDROMES) {
		if (theLargestPalindrome.length < PALINDROME.length) {
			theLargestPalindrome = PALINDROME;
		}
	}

	return theLargestPalindrome;
}

function reverseWord(word: string): string {
	const REVERSE = word.split('').reverse().join('');

	return REVERSE;
}

export {};

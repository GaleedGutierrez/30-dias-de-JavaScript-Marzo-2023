"use strict";
function findLargestPalindrome(words) {
    const REVERSE_WORDS = words.map((word) => reverseWord(word));
    const PALINDROMES = REVERSE_WORDS.filter((reverse, i) => {
        const ORIGINAL = words[i];
        if (ORIGINAL === reverse)
            return ORIGINAL;
    });
    if (!PALINDROMES.length)
        return null;
    let theLargestPalindrome = PALINDROMES[0];
    for (const PALINDROME of PALINDROMES) {
        if (theLargestPalindrome.length < PALINDROME.length) {
            theLargestPalindrome = PALINDROME;
        }
    }
    return theLargestPalindrome;
}
function reverseWord(word) {
    const REVERSE = word.split('').reverse().join('');
    return REVERSE;
}
const xd = findLargestPalindrome(['wow', 'level', 'world', 'hello', 'racecar']);
const xd2 = findLargestPalindrome(['Platzi', 'javascript', 'html', 'css']);
console.log({ xd, xd2 });
// console.log({ xd2 });

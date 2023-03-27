export function myMap(array, func) {
    const RESULT = [];
    for (let i = 0; i < array.length; i++) {
        const ITEM = array[i];
        const PREVIEW = func(ITEM);
        RESULT.push(PREVIEW);
    }
    return RESULT;
}
const array = [
    { name: 'michi', age: 2 },
    { name: 'firulais', age: 6 }
];
const myFunction = (pet) => pet?.name;
const xd = myMap(array, myFunction);
console.log(xd);
//# sourceMappingURL=clase-28.js.map
export function findFamousCats(cats) {
    const SUM_KITTY_FOLLOWERS = cats.map((cat) => {
        const { followers } = cat;
        const total = followers.reduce((acumulador, actual) => acumulador + actual);
        return { ...cat, followers: total };
    });
    const FOLLOWERS = SUM_KITTY_FOLLOWERS.map((cats) => cats.followers);
    const MAX_FOLLOWERS = Math.max(...FOLLOWERS);
    const THE_MOST_FAMOUS = SUM_KITTY_FOLLOWERS
        .filter((cat) => cat.followers === MAX_FOLLOWERS)
        .map((cat) => cat.name);
    return THE_MOST_FAMOUS;
}
const cats1 = [
    {
        name: 'Luna',
        followers: [500, 200, 300]
    },
    {
        name: 'Michi',
        followers: [100, 300]
    },
];
const cats2 = [
    {
        name: 'Mimi',
        followers: [320, 120, 70]
    },
    {
        name: 'Milo',
        followers: [400, 300, 100, 200]
    },
    {
        name: 'Gizmo',
        followers: [250, 750]
    }
];
console.log(findFamousCats(cats1));

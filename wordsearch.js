const transpose = function (word) {
    let arr = [];
    let arr2 = [];
    for (let i = 0; i < word[0].length; i++) {
        for (let row = 0; row < word.length; row++) {
            arr.push(word[row][i]);
        }
        arr2.push(arr);
        arr = [];
    }
    return arr2;
};
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map((ls) => ls.join(""));
    for (l of horizontalJoin) {
        if (l.includes(word) || l === word) {
            return true;
        }
    }
    const vertical = transpose(letters);
    const verticalJoin = vertical.map((ls) => ls.join(""));
    for (let up of verticalJoin) {
        if (up.includes(word) || up === word) {
            return true;
        }
    }
    return false
};
console.log(
    wordSearch(
        [
            ["A", "W", "C", "F", "Q", "U", "A", "L"],
            ["S", "E", "I", "N", "F", "E", "L", "D"],
            ["Y", "F", "C", "F", "K", "U", "A", "L"],
            ["H", "M", "J", "T", "I", "V", "R", "G"],
            ["W", "H", "C", "S", "N", "E", "R", "L"],
            ["B", "F", "R", "E", "G", "E", "Y", "B"],
            ["U", "B", "T", "W", "A", "P", "A", "I"],
            ["O", "D", "C", "A", "K", "U", "A", "S"],
            ["E", "Z", "K", "F", "Q", "U", "A", "L"],
        ],
        "SEINdslLD")
);

module.exports = wordSearch;
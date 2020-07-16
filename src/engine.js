import { dictionary } from './dictionary.js';
import { Trie } from './data-structure.js';

const hasCoordinate = (array, target) => {
    for (const element of array) {
        if (element.coordinates[0] === target[0] && element.coordinates[1] === target[1]) {
            return true;
        }
    }

    return false;
};

const database = new Trie();
for (const word of dictionary) {
    database.insert(word);
}

export const magic = (input) => {
    const output = [];

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            let letter = input[i][j];
            let word = letter.value;
            let inCurrentWord = [JSON.parse(JSON.stringify(letter))];
            while (database.search(word)[1] && letter) {
                for (let k = 0; k < letter.surroundingLetters.length; k++) {
                    let innerLetter = JSON.parse(JSON.stringify(input[letter.surroundingLetters[k][0]][letter.surroundingLetters[k][1]]));
                    innerLetter.surroundingLetters = innerLetter.surroundingLetters.filter(el => !hasCoordinate(inCurrentWord, el));
                    word += innerLetter.value;
                    inCurrentWord.push(innerLetter);
                    if (database.search(word)[0]) {
                        !output.includes(word) ? output.push(word) : null;
                    }
                    if (database.search(word)[1]) {
                        letter = innerLetter;
                        k = -1;
                        continue;
                    }
                    word = word.slice(0, -1);
                    inCurrentWord.pop();
                    letter.surroundingLetters.shift();
                    k--;
                }
                word = word.slice(0, -1);
                inCurrentWord.pop();
                letter = inCurrentWord[inCurrentWord.length - 1];
                letter ? letter.surroundingLetters.shift() : null;
            }
        }
    }

    return output.sort((a, b) => {
        if (b.length > a.length) return 1;
        else if (a.length > b.length) return -1;
        else {
            if (b > a) return -1;
            if (b < a) return 1;
            return 0;
        }
    }).join(', ');
};

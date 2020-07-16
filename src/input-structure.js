const Letter = function(value, coordinates, surroundingLetters) {
    this.value = value;
    this.coordinates = coordinates ? coordinates : [];
    this.surroundingLetters = surroundingLetters ? surroundingLetters : [];
}


export const input = [
    [
        new Letter('', [0, 0], [[0,1], [1,0], [1,1]]),
        new Letter('', [0, 1], [[0,0], [0,2], [1,0], [1,1], [1,2]]),
        new Letter('', [0, 2], [[0,1], [0,3], [1,1], [1,2], [1,3]]),
        new Letter('', [0, 3], [[0,2], [1,2], [1,3]])
    ],
    [
        new Letter('', [1, 0], [[0,0], [0,1], [1,1], [2,0], [2,1]]),
        new Letter('', [1, 1], [[0,0], [0,1], [0,2], [1,0], [1,2], [2,0], [2,1], [2,2]]),
        new Letter('', [1, 2], [[0,1], [0,2], [0,3], [1,1], [1,3], [2,1], [2,2], [2,3]]),
        new Letter('', [1, 3], [[0,2], [0,3], [1,2], [2,2], [2,3]])
    ],
    [
        new Letter('', [2, 0], [[1,0], [1,1], [2,1], [3,0], [3,1]]),
        new Letter('', [2, 1], [[1,0], [1,1], [1,2], [2,0], [2,2], [3,0], [3,1], [3,2]]),
        new Letter('', [2, 2], [[1,1], [1,2], [1,3], [2,1], [2,3], [3,1], [3,2], [3,3]]),
        new Letter('', [2, 3], [[1,2], [1,3], [2,2], [3,2], [3,3]])
    ],
    [
        new Letter('', [3, 0], [[2,0], [2,1], [3,1]]),
        new Letter('', [3, 1], [[2,0], [2,1], [2,2], [3,0], [3,2]]),
        new Letter('', [3, 2], [[2,1], [2,2], [2,3], [3,1], [3,3]]),
        new Letter('', [3, 3], [[2,2], [2,3], [3,2]])
    ]
];

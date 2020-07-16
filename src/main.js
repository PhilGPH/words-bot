import { input } from './input-structure.js';
import { magic } from './engine.js';

const boxesArray = Array.from(document.getElementsByClassName("single-letter"));

boxesArray.forEach((element, index) => {
    // element.addEventListener('keydown', function(next) {
    //     if (element.value.length > 0) {
    //         next = boxesArray[index + 1];
    //         next.focus();
    //     }
    // }) 

    element.addEventListener('keyup', function() {
        input[Math.floor(index/4)][Math.floor(index%4)].value = this.value;
        console.log(input)
    });
});

document.getElementById("letters-grid").addEventListener("keyup", function() {
    const grid = Object.entries(document.getElementsByClassName("single-letter"));
    const allBoxesFilled = grid.every(el => el[1].value);
    const outputBox = document.getElementById("output-box");
    allBoxesFilled ? outputBox.innerHTML = magic(input) : null;
});

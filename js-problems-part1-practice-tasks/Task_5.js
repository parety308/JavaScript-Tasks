/*
### Task-5: 
Generate a random number between 10 to 20.
*/
function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandom(5, 15)); 
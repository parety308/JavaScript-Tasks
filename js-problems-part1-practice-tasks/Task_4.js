/*
### Task-4: 
Write a function to find the longest word in a given string.

sample-input: 
I am learning Programming to become a programmer

sample-output: Programming
*/
function findLongest(str){
    const words = str.split(" ");
    // console.log(words);
    let largest = words[0];
    for(let i=0;i<words.length;i++){
        if(largest.length<words[i].length) largest=words[i];
    }
    return largest;
}

let str = 'I am learning Programming to become a programmer';
// const ans = str.split(" ");
console.log(findLongest(str));
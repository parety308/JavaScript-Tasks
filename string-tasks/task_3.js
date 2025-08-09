
// Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 
function hasAllVowels(str) {
    const vowels = new Set();
    const lowerStr = str.toLowerCase();

    for (let char of lowerStr) {
        if ("aeiou".includes(char)) {
            vowels.add(char);
        }
    }

    return vowels.size === 5;
}

// Example usage:
console.log(hasAllVowels("beautiful song"));   // true
console.log(hasAllVowels("rhythm"));           // false

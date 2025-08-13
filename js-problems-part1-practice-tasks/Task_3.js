/*
### Task-3: 
Write a function to count the number of vowels in a string.
*/

function findVowel(str){
    let count =0;
    for(const value of str){
        if(value==='a'||value==='e'||value==='i'||value==='o'||value==='u') count++;
    }
    return count;
}
 const str = 'abdfugyqwphAHHYFSPVUTEIO';
 str1=str.toLowerCase(str);
 console.log(findVowel(str1));
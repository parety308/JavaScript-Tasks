/*If a given string has either x, replace x by y. if the given string has X, replace it by Y.

    Hint: You should be able to check whether x or X exists. After that, search online how to replace 
a character in a string.*/
var str = 'x is X';
for(var char in str){
    if(str[char]==='x') str[char] ='y';
    if(str[char]==='X') str[char] ='Y';
    console.log(str[char]);
}

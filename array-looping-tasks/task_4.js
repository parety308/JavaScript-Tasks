/*
### Task 4 (Hard)

Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

**Input:**
`const statement = 'I am a hard working person'`

**Output:**

`'person working hard a am I'`

---
*/
const statement ='I am a hard working person';
const ans = statement.split(' ');
const ans2 = ans.reverse();
let rev_statement='';
for(let str of ans2 ){
    rev_statement+=str.concat(' ');
}
console.log(rev_statement);
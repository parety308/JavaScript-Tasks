/*
### Task 1

Write a JavaScript code to reverse the array colors `without using the reverse method`.

**Input:**
`const colors = ['red', 'blue', 'green', 'yellow', 'orange']`

**Output:**

`['orange', 'yellow', 'green', 'blue', 'red']`


*/

const colors = ['red','blue','greeen','yellow','orange'];
const rev_colors=[];
for(let i=colors.length-1,j=0;i>=0,j<colors.length;i--,j++){
    rev_colors[j]=colors[i];
}
console.log(rev_colors);
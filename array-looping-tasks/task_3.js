/*
### Task 3

Use a for...of loop to concatenate all the elements of an array into a single string.

**Input:**
`var numbers = ['Tom', 'Tim', 'Tin', 'Tik']`

**Output:**

`'TomTimTinTik'`

---

*/
var number = ['Tom','Tim','Tin','Tik'];
var newStr='';
for(var num of number){
    newStr+=num;
}
console.log(newStr);
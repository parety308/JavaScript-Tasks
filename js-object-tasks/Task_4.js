/*
### Task-4

Count the `number of properties`.

**Input:**
```js
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

**Output:**
    4
*/
const student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Chattogram',
    sex:'male',
    istudent:true
};
const propertyNum = Object.keys(student).length;
console.log(propertyNum);
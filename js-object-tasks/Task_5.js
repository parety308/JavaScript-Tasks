/*
### Task-5 (Hard)

Loop through an object and print the key-value pairs with their `types`

**Input:**
let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};

**Output:**
    key: name | type:  string
    key: age | type:  number
    key: city | type:  string
    key: isStudent | type:  boolean
*/
let myObject = {
    name:"Parvez Hasan",
    age:21,
    city:"chattogram",
    isStudent : true
};

for(const item in myObject){
    console.log("Key : "+item+" | Key Value  : "+myObject[item]+" | Type : "+typeof(item));
}
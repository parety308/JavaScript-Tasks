/*
# js-problems-part1-practice-tasks

### Task-1: 
Write a function to convert temperature from Celsius to Fahrenheit.

---

*/
function celToFarhr(temp){
    return (9*temp)/5+32;
}
const temp = 29;
console.log("Temparature on Celcius : "+temp)
console.log("Temparature on Fahrenheit : "+celToFarhr(temp));

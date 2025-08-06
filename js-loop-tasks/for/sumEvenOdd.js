

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/
//start to write 
var sumOdd=0,sumEven=0;
for(var i=91;i<=129;i+=2){
    sumOdd+=i;
    // console.log(i,',');
}
for(var i=52;i<85;i+=2){
    sumEven+=i;
    //  console.log(i,',');
}
console.log("sum of all the odd numbers from 91 to 129 :",sumOdd);
console.log("sum of all the even numbers from 51 to 85",sumEven);
/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
var sum =0;
for(var i =1;;i++){
if(sum>100) break;
sum+=i;
}
console.log(sum);
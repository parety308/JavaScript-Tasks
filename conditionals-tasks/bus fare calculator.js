/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
var ticketPrice = 800;
var age =25;
var isStudent = true;
if(age<10) console.log('Free');
else if(isStudent) console.log("Price :",ticketPrice/2);
else if (arg>=60) console.log("Price :",(ticketPrice-ticketPrice*15/100));
else  console.log('Price :',ticketPrice) ;


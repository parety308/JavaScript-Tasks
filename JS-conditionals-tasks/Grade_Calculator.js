/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
//Start here to write code 
var marks = 67;
if (marks >= 90) console.log('A');
if (marks >= 80 && marks < 90) console.log('B');
if (marks >= 70 && marks < 80) console.log('C');
if (marks >= 60 && marks < 70) console.log('D');
if (marks < 60) console.log('F');

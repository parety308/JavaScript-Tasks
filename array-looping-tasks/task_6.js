/*
### Task 6
Given an array of student objects, print each student’s name and marks.

```
[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
```

# Expected ooutput: 
```
John scored 85
Alice scored 90
```
*/

const student = 
    [{name:'Parvez',  marks:85},
        {name:'Yesrat',marks:95}
    ]
for(const std of student){
    console.log(std.name+' scored '+std.marks);
}
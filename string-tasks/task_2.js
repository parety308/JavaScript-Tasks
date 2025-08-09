// Count how many times a string has the letter `a` or `A`
var str='You are a good and I AM A Student';
var count =0;
for(var i=0;i<str.length;i++){
  if(str[i]==='a'||str[i]==='A') count++;
}
console.log(count);
const num = 10;
const num2 = 30;

console.log(num + num2);
console.log(num - num2);
console.log(num * num2);
console.log(num / num2);
console.log(num % num2);

let a = 4;
a++;
console.log(a);
a--;
console.log(a);
let x =10;
let y= 4;
x=x+y;
//x+=1;
console.log(x);
console.log(num>=num2);
let age = 10;
let age2 = "10";
console.log("loosely equal to",age==age2);
//loosely checks on the value regardless of the data type
console.log("loosely not equal to",age!=age2);
console.log("strictly equal to",age === age2);
console.log("stricty not equal to",age !== age2);
//strictly equal to checks on the data type and value
//and both conditions passes
if (age == age2 && num >= num2){
console.log("and", true);
}
else{
console.log("and false",false);
}
//or one passes
if (age == age2 || num >= num2){
console.log("or", true);
}
else{
console.log("or false",false);
}



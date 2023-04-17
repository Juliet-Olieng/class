let num=[24,true,'hello',38];
let num2=new Array(24,true,'hello',38);
console.log(num);
console.log(num2);

// // adding at the end
num.push('fruits');
console.log(num);
// // adding at the start
num.unshift(2);
console.log(num);
// // removing at the end
num.pop();
console.log(num);
// // removing at the start
num.shift();
console.log(num);
// // adding at an index point
num[3]=8;
console.log(num);
// find the length of an array
console.log(num.length)
// finding the index of an array
console.log(num.indexOf(38))
// concatinating two arrays
let num3=['mango', 'pineapple',35];
newArray=num.concat(num3);
console.log(newArray);
console.log(newArray.length)
console.log(newArray.slice(4))
// // given an array of return an array even where every item in x is 
// multiplied by 5
// // 1. declare an array
// // 2.loop through array x
// // 3. multiply every item by 5
// // 4.create an array even and push value multiplied
let x=[5,87,33,67];
let even =x.map(function(item){
return item*5
})
console.log(even);
// // using forEach
// let results=x.forEach(function(item){
//     return item*5
// }) 
// console.log(results);
// // correction
let result=[];
x.forEach(function(item){
    result.push(item*5)
})
console.log(result)
// // concatination
// let newArray=num.concat(x);
// console.log(newArray);
// // spread operator
// let test=['angela',...x];
// console.log(test);
// // distruction
// let [a,b,...c]=x;
// console.log({a});
// console.log({b});
// console.log({c});

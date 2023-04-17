function dividedArray(num){
    if (num.length<=1){
        return num;
    }
    let middle=Math.floor(num.length/2);
    let left= num.slice(0,middle);
    let right= num.slice(middle);
    return sortedArray(dividedArray(left),dividedArray(right));
}
function sortedArray(left,right){
let emptyAray=[];
while(left.length && right.length){
    if (left[0]<right[0]){
        emptyAray.push(left.shift());
    }
    else{
        emptyAray.push(right.shift());
    }
}
return [...emptyAray,...left,...right];
}

let num=[10,2,56,3,8,4,11];
console.log(dividedArray(num));
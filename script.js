let marks = [23,45,67,99,90,96,92,94,23,43,55,69];
let toppersmarks = marks.filter((val) =>{
    return val > 90

})
console.log(toppersmarks);

// to sum all numbers of array length of array is given by user
let n = prompt("enter a number");
let arr = [];
for(let i = 1; i <= n; i ++){
    arr[i-1] = i;   

}
console.log(arr)
let sum = arr.reduce((result, current)=>{
    return result + current;

})
console.log(sum);   

// product of all numbers of array
let prod = arr.reduce((result, current)=>{
    return result * current;

})
console.log(prod); 
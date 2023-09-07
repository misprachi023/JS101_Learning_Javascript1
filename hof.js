// Find the average of elements present at odd index of the following array.
// let arr = [10, 24, 56, 72, -10, -88, 100, 564];

let arr =  [10, 24, 56, 72, -10, -88, 100, 564];

let odd = arr.filter((ele , ind) => ind % 2 != 0 );

let sum = odd.reduce((acc , curr) => acc + curr, 0);

let average = sum / odd.length;

console.log(average)


 // Create a new array from the given array such that each element of the new array is raised to a power of 5.
// Input = [2, 3, 4, 6, 7]
// Output = [32, 243, 1024, 7776, 16807]

let input = [2, 3, 4, 6, 7];

let output = input.map(ele => Math.pow(ele , 5));

console.log(output)



// Taking the following array into consideration get the output as given below:
// arr = [3,4,5,6,7]
// Output ==> 3 - 5 - 7
// Hint: You have to use forEach and conditional statement over here.

let arr = [3,4,5,6,7];

let  output = [];

arr.forEach(ele => {
  if(ele %2 != 0){
    output.push(ele);
  }
});
let newOutput = output.join (' - ');

console.log(newOutput)



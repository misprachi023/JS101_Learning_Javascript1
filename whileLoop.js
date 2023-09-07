// Print the numbers from the given starting point till ending point (including both start and end)
var starting = 100;
var ending = 150;
while(starting <= ending)
{
  console.log(starting);
  ++starting;
}


// Print the odd numbers from 0 till the given limit
var limit = 100;
var start = 0;
while(start <= limit)
  {
    if (start % 2 != 0){
      console.log(start);
    }
    start++;
  }



  // Print the sum of all the multiples of 3 from 0 to the given limit
var a = 1;
var sum = 3;
while(a <= 10){
  console.log(sum + "x" + a + "=" +( a * sum))
  a++;
}


// Print the average of even numbers from 1 to 100 (both included)
var limit = 100;
var start = 1;
var sum = 0;
var count = 0;
while(start <= limit){
  if(start % 2 ==  0){
    sum  = sum+start;
    count++;
    // console.log(sum + "-" + count);
  }
  start++;
}
// console.log(sum);
// console.log(count);
console.log("Average " +(sum/count));
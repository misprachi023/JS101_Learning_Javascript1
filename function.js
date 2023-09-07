// Write a function named addNumbers which takes two numbers as input and return their sum

// Use the function to calculate the sum of given three numbers

function addNumber(a,b){
    return a+b;
  }
  let n1=5;
  let n2=7;
  let n3=9;
  let sumTwoNum=addNumber(n1, n2);
  let sumThreeNum=addNumber(sumTwoNum, n3);
  console.log("Sum of three Numbers", sumThreeNum)



  // Write code to find the absolute difference of two numbers

// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14
// NOTE: It must consist of two functions 1. To find the difference 2. To
function absoluteDifference(a,b){
    return Math.abs (a-b);
  }
  function calculateDiff(N1, N2){
    let diff= absoluteDifference(N1, N2);
    console.log("Absolute Difference", diff)
  }
  let input1N1=12;
  let input1N2=4;
  calculateDiff(input1N1, input1N2);
  
  let input2N1=4;
  let input2N2=18;
  calculateDiff(input2N1, input2N2)


  // Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)
function isOdd(num){
    return num% 2!==0;
  }
  function printOddNumber(limit){
    for(let i=0; i<=limit; i++){
      if(isOdd(i)){
        console.log(i)
      }
    }
  }
  let limit= 40;
  printOddNumber(limit);



  // Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  }
  
  function calculateAverage(arr) {
    const sum = sumArray(arr);
    const length = arr.length;
  
    if (length === 0) {
      return 0;
    }
  
    return sum/length;
  }
  
  let numbers = [10, 15, 20, 25];


  // Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]
function toLowerCase(char){
    return char.toLowerCase();
  }
  function convertWordToLowerCase(word){
    return word.split('').map(toLowerCase).join('');
  }
  function convertArrayToLowerCase(arr){
    return arr.map(convertWordToLowerCase);
  }
  let inputArr=["MA", "SA", "I", "SCH", "OOL"];
  let outputArr=convertArrayToLowerCase(inputArr)
  console.log(outputArr)



  // Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code blocks
function swapChar(char){
    let lower= "abcdefghijklmnopqrstuvwxyz"
    let upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let result=""
    for(let i=0; i<char.length; i++){
      for(let j=0; j<lower.length; j++){
         if (char[i]==lower[j]){
        result+=upper[j];
      }
          else if(char[i]==upper[j]){
          result+=lower[j]
        }
        
      }
    }
    console.log(result)
  }
  swapChar("Test")



  // Create a function to check if a number is Prime or Not
function check_prime(n){
    let count=0;
    for(let i=0; i<=n; i++){
      if(n%i==0){
        count++
      }
    }
    if(count==2){
      console.log("Prime")
    }
    else{
      console.log("Not a Prime")
    }
  }
  check_prime(2)


  // Use the above function to print the Primes from 2 to a given limit
function check_prime(n){
    // let count=0;
    for(let i=2; i<=n; i++){
      let count=0;
      for(let j=1; j<=i; j++){
        // let count=0;
      
      if(i%j==0){
        count++
      }
    }
    (count ==2 )?console.log(i):null;
    }
  }
  check_prime(100)


  // Use the same function to print Non-Primes from 2 to a given limit

function check_prime(n){
    // let count=0;
    for(let i=2; i<=n; i++){
      let count=0;
      for(let j=1; j<=i; j++){
        // let count=0;
      
      if(i%j==0){
        count++
      }
    }
    (count !==2 )?console.log(i):null;
    }
  }
  check_prime(100)


  // Write a function to check if the char is a small case or not.
function check_case(character){
    let low="abcdefghijklmnopqrstuvwxyz";
    let result=false;
    for(let i=0; i<=low.length; i++){
      if(character == low[i]){
        result=true;
        break;
      }
    }
    if(result==true){
      console.log("Lower case")
    }else{
      console.log("Upper case")
    }
  }
  check_case("P")

  // Write a function to replace spaces in a given string with - .
function char(str){
    let space="";
    for(let i=0; i<str.length; i++){
      if(str[i]==" "){
        space=space+"_"
      }
      else{
        space=space+str[i]
      }
    }
    console.log(space)
  }
  char("Prachi mishra")


  
// Given an array print the position (starting with 1) and the element in a single.
let n=[3,6,9,8,7,3,12]
for(var i=1; i<n.length; i++){
    console.log(n[i])

}


// Given a character in lower case print the upper case character
let lowercaseChar='a';
let uppercaseChar=lowercaseChar.toUpperCase();
console.log(uppercaseChar)




// Given an array of numbers find the average of all the even numbers.
let sum=0;
let count=0
let arr=[1, 2, 5, 8, 9,12.6,3]
for(let i=0; i<arr.length; i++){
  if(arr[i]%2==0){
    sum=sum+arr[i];
    count++;
  }
}
console.log("Average" + "="+ (sum/count))



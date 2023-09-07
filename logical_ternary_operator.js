// Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

let Dob = 1999;
let age = 2023-Dob;
if(age >= 13 && age <= 19 )
{
  console.log("Teenage");
}
else if(age >= 20 && age <= 29)
{
 console.log("Twenties") 
  
}


// Given any character, if it is a vowel print "Vowel"
let str = "u";
if(str == "a" || str == "e" || str == "i" || str == "o" || str == "u")
{
  console.log("Vowel")
}


// Given and character if it is a consonant print "Consonant"
let str = "a"
if(str == "b" || str == "c" || str == "d" || str == "f" || str == "h" || str == "j" || str == "k" || str == "l" || str == "m" || str == "n" || str == "p" || str == "q" || str == "r" || str == "s" || str == "t" || str == "v" || str == "w" || str == "x" || str == "y" || str == "z" || str == "g")
  console.log("Consonant")
else{
  console.log("Invalid")
}



// Given 3 numbers (all different values), print which is greatest.
let a = 50;
let b = 20;
let c = 10;

if(a > b && a > c)
{
  console.log("a is the greatest")
}
else if(b > a && b > c){
  console.log("b is the greatest")
}
else{
  console.log("c is the greatest")
}



// Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ..
let days = "Sun";

switch(days){
  case 'Mon':
    console.log('Monday')
    break;
   case 'Tue':
    console.log('Tuesday')
    break;
  case 'Wed':
    console.log('Wednesday')
    break;
  case 'Thur':
    console.log('Thursday')
    break;
  case 'Fri':
    console.log('Friday')
    break;
  case 'Sat':
    console.log('Saturday')
    break;
  case 'Sun':
    console.log('Sunday')
    break;
   default :
    console.log('Wrong Input!')
}
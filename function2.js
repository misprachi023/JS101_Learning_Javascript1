// Write a custom function that has the same behavior of inbuilt Array Join
// let name = ['Prachi', 'Mamta', 'Mishra'];

// console.log(name.join());
// console.log(name.join(''));
// console.log(name.join('-'));
// arr(["Prachi", "Mamta", "Mishra"]);
// 
function customJoin(arr, btw){
    if(btw === ""){
       btw = "";
    }else{
      btw = btw || "";
    }
    let str ="";
    for(let i=0; i<arr.length; i++){
      if(i ===arr.length-1){
        str  += arr[i];
      }else{
        str += arr[i]+ btw;
      }
    }
    return str;
  }
  let list =["I", "am", "Prachi"];
  console.log(customJoin(list));
  

  // Write a custom function that has the same behavior of inbuilt Array Last Index Of Function
// let friends = ['Dodo', 'Tiger', 'Prachi', 'Dodo'];

// console.log(friends.lastIndexOf('Dodo'));
// console.log(friends.lastIndexOf('Tiger'));
// console.log(friends.lastIndexOf('Prachi'))

function customLastIndex(findIn, search, position){
    if(position){
      if(position < 0){
        position  = findIn.length + position;
      }
    }else if(!position){
      position = findIn.length - 1;
    }
    let found = false;
    for(let i = position; i>= 0; i--){
      if(findIn[i]== search){
        found = true;
        return i
      }
    }
    if(!found){
      return -1;
    }
  }
  let animals = ['Dodo', 'Tiger', 'cat', 'Dodo'];
  console.log(customLastIndex(animals, "Tiger" , 1))
  console.log(customLastIndex(animals, "Tiger"))
  console.log(animals.lastIndexOf("Tiger"))
        
        
      
// Write a custom function that has the same behavior of inbuilt Array Slice Function
// let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// console.log(animals.slice(2, 4));
// console.log(animals.slice(1, 3));
// console.log(animals.slice(-1));
// console.log(animals.slice(5, -1));
// console.log(animals.slice(-2, -5));


function customSlice(arr, start, end){
    if(start){
      if(start < 0 ){
        start= arr.length + start;
      }
    }
      else if(!start){
        start = 0;
      }
       if(!end || end >arr.length){
          end = arr.length;
        }
    
       else if(end < 0){
         end = arr.length + end
       }
    let newArr = [];
        for(let i = start; i<end; i++){
          newArr.push(arr[i]);
        }
    
        return newArr;
  }
   let games = ["chess", "Ludo" , "carrom", "badminton"]
  // let name = "Prachi"
  console.log(customSlice(games, (1 , 2)))
     

  
  // Write a custom function that has the same behavior of inbuilt String Substring Function
// let str = 'Prachi';

// console.log(str.substring(3));
// console.log(str.substring(1,3));
// console.log(str.substring(4,6))

function customSubstring ( enteredString, start , end){
    if(start > end){
      let maximum = start;
      start = end;
      end = maximum;
    }
    if(!start || start < 0){
      start = 0;
    }
    if(!end || end > enteredString.length){
      end = enteredString.length;
    }
  
    let result = "";
    for(let i = start; i< end; i++){
      result += enteredString[i];
    }
    return result;
  }
   let randomName = "Prachi Mishra";
  console.log(customSubstring(randomName, 3))


  // Write a custom function that has the same behavior of inbuilt Array Includes Function
// let arr = [23, 06, 2003];

function customIncludes(searchIn, searchValue, start){
    if (start ){
      if(start < 0){
       start = searchIn.length + start;
      }
    }else if(!start || start < 0){
      start = 0;
    }
    let isFound = false;
    for(let i = start; i< searchIn.length; i++){
      if(searchIn[i] == searchValue){
        isFound = true;
      }
      if(searchValue.length > 1 && searchValue[0] === searchIn[i]){
        let word = "";
        for(let j = i; j < i+searchValue.length; j++){
          word+= searchIn[j];
        if(word == searchValue){
           return false;
        }else {
               return true
            }  
        }  
      }
    }  
    
  }
    let str = "randomNumberareoccured";
       console.log(customIncludes(str , "are", 4))
  
// - Given an object of student grades and their marks in the mentioned below format, print the highest scored student for each grade along with the total
// - Sample Input
let school= [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
}
 ]


const data = [
 	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
 		]
	},
 	{
 		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]


let schoolSum = []
  

for(let i = 0; i < school.length; i++){
  let marksSum = {};
  let maximumMarks = 0;
  for(let j = 0; j< school[i]["students"].length; j++){
    let sum = 0;
    for(let k = 0; k < school[i]["students"][j]["marks"].length; k++){
      sum += school[i]["students"][j]["marks"][k];
    }
    marksSum[school[i]["students"][j]["name"]] = sum;
    sum = 0;
  }
  for(key in marksSum){
    if(maximumMarks < marksSum[key]){
      maximumMarks = marksSum[key];
    }
  }
  for(key in marksSum){
    if(maximumMarks === marksSum[key]){
      console.log(school[i]["grade"]+"-"+key+"-"+ marksSum[key]);
    }
  }
}





const userData = [
    { name: "Nrupul", age: 32 },
    { name: "Prateek", age: 30 },
    { name: "Aman", age: 26 },
    { name: "Albert", age: 28 },
    { name: "Yogesh", age: 44 },
  ]
  
  const users = {}
  
  userData.forEach((user) => {
    users[user.name] = user.age
  })
  for (const name in users) {
    if (users[name] > 30) {
      console.log(name)
    }
  }
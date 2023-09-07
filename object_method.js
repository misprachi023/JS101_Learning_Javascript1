// Create an object with the following functionality
// Ability to add 3 students details and their marks in 3 subjects
// Method to find the student with the least total.
// Method to find the student with the highest total.


let details = 
  {
     data : [],
      addStudent : function(name, english, maths, science)
      {
         obj = {};
         obj.name = name;
         obj.english = english;
         obj.maths = maths;
        obj.science = science;

         this.data.push(obj)
      },
    print : function()
      {
  console.log(this.data)
      },
    leastTotal : function()
      {
        let max = -Infinity;
        let maxStudent ;
        for(let i=0; i<this.data.length; i++)
          {
            let total = this.data[i].english + this.data[i].maths + 
            this.data[i].science

            if(total > max)
            {
              max = total;
              maxStudent = this.data[i].name
            }
          }
        console.log(maxStudent,max)
        
      },
    highestTotal : function()
      { 
        let min = Infinity;
        let minStudent;
        for(let i=0; i< this.data.length; i++)
          {
            let total = this.data[i].english + this.data[i].maths + 
            this.data[i].science

            if(total < min)
            {
              min = total;
              minStudent = this.data[i].name
            }
          }
        console.log(minStudent,min)
      }  
        
 }

details.addStudent("Prachi" ,75,97,95)
details.addStudent("Prakash" ,70,80,77)
details.addStudent("Deepak" ,80,85,75)

details.print()
details.leastTotal()
details.highestTotal()

// console.log(details.maxMarks.name)



function createProducts(...foods)
{
  let products = {}
  products.data = []
  for(let i=0; i < foods.length; i++)
  {
    products.data.push({name: foods[0][i], quantity: foods[1][i], price: foods[2][i]})
  }
  products.total = ()=> 
    {
      let sum =0;
      for(let i =0; i< products.data.length; i++)
      {
         sum += products.data[i]["quantity"] * products.data[i]["price"]
      }
      return sum;
    }
  console.log(products.total())
}

createProducts(["Rice", "Dal", "Salt"], [2, 3, 1], [60, 50, 20])



// Create an object with the following functionality
// Ability to add 3 students details and their marks in 3 subjects
// Method to find the student with the least total.
// Method to find the student with the highest total.


let details = 
  {
     data : [],
      addStudent : function(name, english, maths, science)
      {
         obj = {};
         obj.name = name;
         obj.english = english;
         obj.maths = maths;
        obj.science = science;

         this.data.push(obj)
      },
    print : function()
      {
  console.log(this.data)
      },
    leastTotal : function()
      {
        let max = -Infinity;
        let maxStudent ;
        for(let i=0; i<this.data.length; i++)
          {
            let total = this.data[i].english + this.data[i].maths + 
            this.data[i].science

            if(total > max)
            {
              max = total;
              maxStudent = this.data[i].name
            }
          }
        console.log(maxStudent,max)
        
      },
    highestTotal : function()
      { 
        let min = Infinity;
        let minStudent;
        for(let i=0; i< this.data.length; i++)
          {
            let total = this.data[i].english + this.data[i].maths + 
            this.data[i].science

            if(total < min)
            {
              min = total;
              minStudent = this.data[i].name
            }
          }
        console.log(minStudent,min)
      }  
        
 }

details.addStudent("Prachi" ,75,97,95)
details.addStudent("Prakash" ,70,80,77)
details.addStudent("Deepak" ,80,85,75)

details.print()
details.leastTotal()
details.highestTotal()

// console.log(details.maxMarks.name)

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

// step 1 - loop over employee array in a function
function processBonuses (array) {

  //loop through the array and calculate the bonuse then log it out to the console
  for (let employee of array) {
    
    let newObject = createEmployeeObject(employee); //Creates the new object with the calculated bonuses
    console.log(newObject); //displays the processed bonus
  }
}

function calcPercent () {

  //step 3 bonus calculation
//rating <= 2 gets bonus=false
//rating = 3 gets bonus of 4% of annualSalary
//rating = 4 gets bonus of 6% of annualSalary
//rating = 5 gets bonus of 10% of annualSalary
//employeeNumber = 4 digits long bonus += 5% of annualSalary
//anualSalary > 65,000 get bonus -= 1%
//bonus has to be between 0 and 13%
  
}

function createEmployeeObject (employee) {
  let person={
    bonusPercent: calcPercent(employee),
    totalBonus: Math.round(employee.annualSalary * calcPercent(employee) ),
    totalCompensation: employee.annualSalary * Math.round(employee.annualSalary * calcPercent(employee) ),
    name: employee.name
  }
  return person;


  // step 2 - create a function that one employee object and returns a new object with the following properties
// name = employees name
// bonusPercentage = the bonus percent the employee is to receive
// totalCompensation = base annual pay + bonus
// totalBonus = the total bonus rounded to the nearest dollar
}
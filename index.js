// READ.ME has signatures of the functions. createEmployeeRecord() takes an array of 4 elements, returns object with given keys.
//Behavior: Loads Array elements into corresponding Object properties. Additionally, initialize empty Arrays on the properties timeInEvents and timeOutEvents.

const employeeArr = ["Gray", "Worm", "Security", 1];

function createEmployeeRecord(employeeData) {
  const records = {
    firstName: employeeData[0],
    familyName: employeeData[1],
    title: employeeData[2],
    payPerHour: employeeData[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
  return records;
}
// createEmployeeRecords() - map(). Feed ceateEmployeeRecords with an aray of array. map() will iterate over the array, perform some function, and return a new array.

// Piazza- Consider what the functions wants you to implement as the parameter (argument) for the function, and determine which method you will need to utilize on that parameter to return what the function needs to return.

function createEmployeeRecords(employeeArr) {
  //return twoRows.map(row => {row.map((e) => e.row[0])});;
  return employeeArr.map(createEmployeeRecord);
}
/* code above; creates two records, correctly assigns the first names, creates more than two records with the test.
 */

// createTimeInEvent() - takes in an employee record Object, a date stamp("YYYY-MM-DD HHMM"). Returns  the employee record a new array on the record object.

/*function createTimeInEvent(employee, dateStamp) {
    // let dateStamp = "YYYY-MM-DD HHMM";
    const newTimeInEvent = {
        type: "TimeIn",
        hour: parseInt(dateStamp.split(" ")[1]),
        // string.substring(startIndex, endIndex)
        // hour: parseInt(dateStamp.substring(11)),
        date: dateStamp.split(" ")[0],
    }
    employee.timeInEvents.push(newTimeInEvent);
    return employee;
}
*/

function createTimeInEvent(employee, dataStamp) {
  const hour = parseInt(dataStamp.substring(11));
  const date = dataStamp.substring(0, 10);
  const newTimeInEvent = {
    type: "TimeIn",
    hour,
    date,
  };
  employee.timeInEvents.push(newTimeInEvent);
  return employee;
}

/*
function createTimeOutEvent(employee, dateStamp) {
    //const dateStamp = "YYYY-MM-DD HHMM";
    let newTimeInEvent = {
        type: "TimeOut",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0],
    }
    employee.timeInEvents.push(newTimeInEvent[0],[1]);
    return employee;
}
*/

function createTimeOutEvent(employee, dataStamp) {
  const hour = parseInt(dataStamp.substring(11));
  const date = dataStamp.substring(0, 10);
  const newTime0utEvent = {
    type: "TimeOut",
    hour,
    date,
  };
  employee.timeOutEvents.push(newTime0utEvent);
  return employee;
}

function hoursWorkedOnDate(employee, date) {
  const timeInPunch = employee.timeInEvents.find((time) => time.date === date).hour / 100;
  const timeOutPunch = employee.timeOutEvents.find((time) => time.date === date).hour / 100;
  return parseInt(timeOutPunch - timeInPunch);
}

function wagesEarnedOnDate(employee, date) {
  const wages = hoursWorkedOnDate(employee, date) * employee.payPerHour;
  return wages;
}

function allWagesFor(employee) {
  const datesWorked = employee.timeInEvents.map((timeIn) => timeIn.date);
  //iterate over datesWorked, get the total wages. reduce(total, date) an initial value 0.
  const totalWages = datesWorked.reduce((total, date) => {
    return total + wagesEarnedOnDate(employee, date);
  }, 0);
  return totalWages;
}

// function calculatePayroll(employees) {
//   let sum = 0;
//   for (let i = 0; i < emArray.length; i++) {
//     sum += wagesEarnedOnDate.call(employees[i]);
//   }
//   return sum;
// }


function calculatePayroll(employees, wagesEarnedOnDate, init) {
  return employees.reduce((employee) => wagesEarnedOnDate(employee, date), init);
}

calculatePayroll (employees, wagesEarnedOnDate, 0)


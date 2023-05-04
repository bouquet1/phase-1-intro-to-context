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
    return records
}
// createEmployeeRecords() - map(). Feed rceateEmployeeRecords with an aray of array. map() will iterate over the array, perform some function, and return a new array. 
    
 // Piazza- Consider what the functions wants you to implement as the parameter (argument) for the function, and determine which method you will need to utilize on that parameter to return what the function needs to return.

    
function createEmployeeRecords(employeeArr){
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
        type: 'TimeIn',
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
        type: 'TimeOut',
        hour,
        date,
    };
    employee.timeOutEvents.push(newTime0utEvent);
    return employee;
}

function hoursWorkedOnDate(employee, date) {
    // get timeInEvent and timeOutEvent from the employee record Object
    const timeInPunch = employee.timeInEvents.find(timeIn => timeIn.date === date)//.substring(11, 12); 
    const timeOutPunch = employee.timeOutEvents.find(timeOut => timeOut.date === date)//.substring(11, 12);
    //extract hour value for them. 
    const timeInPunchHour = parseInt(timeInPunch.hour.substring(11, 12));
    const timeOutPunchHour = parseInt(timeOutPunch.hour.substring(11, 12));
    // add 10 to substring() to reflect base 10, number system we use
    //calculate the numbers of hours worked. TimeOut - TimeIn
    //return timeOutPunchHour - timeInPunchHour;
    return timeOutPunch - timeInPunch;
}

function wagesEarnedOnDate(employee, date) {
    return (hoursWorkedOnDate(date))*(employee.payPerHour);
}







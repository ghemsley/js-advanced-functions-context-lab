/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
  let eligibleDates = this.timeInEvents.map(function (e) {
    return e.date
  })

  let payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this),
    0
  ) // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable
}

// Your code here
const createEmployeeRecord = (data) => {
  return {
    firstName: data[0],
    familyName: data[1],
    title: data[2],
    payPerHour: data[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

const createEmployeeRecords = (data) =>
  data.map((array) => createEmployeeRecord(array))

function createTimeInEvent(date) {
  const newDate = date.split(' ')
  this.timeInEvents.push({
    type: 'TimeIn',
    hour: parseInt(newDate[1]),
    date: newDate[0]
  })
  return this
}

function createTimeOutEvent(date) {
  const newDate = date.split(' ')
  this.timeOutEvents.push({
    type: 'TimeOut',
    hour: parseInt(newDate[1]),
    date: newDate[0]
  })
  return this
}

function hoursWorkedOnDate(date) {
  const timeInEvent = this.timeInEvents.find((event) => event.date === date)
  const timeOutEvent = this.timeOutEvents.find((event) => event.date === date)
  return (timeOutEvent.hour - timeInEvent.hour) / 100
}

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

const findEmployeeByFirstName = (records, name) =>
  records.find((record) => record.firstName === name)

function calculatePayroll(records) {
  const wages = records.map((record) => allWagesFor.call(record))
  return wages.reduce((sum, current) => sum + current)
}

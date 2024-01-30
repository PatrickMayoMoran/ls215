/*
Given a list of dates and months, return the number of dates that have any of the provided months as part of their dates
- you can assume months will not be repeated in the months list
*/

let date_list = [
  [1993,7,23],
  [1,3,5],
  [2,3,5],
  [3,3,5],
  [2024,1,30],
  [2024,2,28],
  [2024,6,17],
  [2024,8,12],
  [2024,7,5],
];

let months = [2,7,1];

console.log(number_in_months(date_list, months) === 4);

function month_in_date(date, month) {
  return date[1] === month;
}

function number_in_month(dates, month) {
  if (dates.length == 0) {
    return 0;
  } else {
    return month_in_date(dates[0], month) + number_in_month(dates.slice(1), month);
  }
}

function number_in_months(dates, months) {
  if (months.length === 0) {
    return 0;
  } else {
    return number_in_month(dates, months[0]) + number_in_months(dates, months.slice(1));
  }
}

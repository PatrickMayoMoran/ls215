=begin 
Given a list of dates and months, return the number of dates that have
contain any of the given months. 
You may assume the months list will never repeat
=end

dates = [
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

months = [2,7,1];

puts number_in_months(dates, months)  == 4 # Should return true

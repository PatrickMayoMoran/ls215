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

def month_in_date(date, month)
  return 1 if date[1] == month
  return 0
end

def number_in_month(dates, month)
  if dates.empty?
    0
  else 
    month_in_date(dates[0], month) + number_in_month(dates[1..-1], month)
  end
end

def number_in_months(dates, months)
  if months.empty?
    0
  else
    number_in_month(dates, months[0]) + number_in_months(dates, months[1..-1])
  end
end

puts number_in_months(dates, months)  == 4 # Should return true

# helper function tests
puts month_in_date([2024,6,17], 6) == 1
puts number_in_month(dates, 7) == 2

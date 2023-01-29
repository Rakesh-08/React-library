export const selectedYear = new Date().getFullYear();
export const selectedMonth = new Date().getMonth();

// return no. of days in month
export const daysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

// return day of the date
export const monthDay = (date) => {
  return new Date(date).getDay();
  // 0 for sunday to 6 for saturday
};

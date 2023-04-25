export const getDays = (startDay, endDate) => {
  let days = [];

  for (let i = 0; i < startDay; i++) {
    days.push("-");
  }

  for (let i = 1; i <= endDate; i++) {
    days.push(i);
  }

  return days;
};

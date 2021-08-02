const getInitialDates = () => {
  const currentDate = new Date();
  const pastWeekDate = new Date(currentDate);
  pastWeekDate.setDate(pastWeekDate.getDate() - 365);
  // should be changed from 365 to 7 when pipeline bug is fixed
  const formattedPastDate = pastWeekDate.getFullYear() + "-" + ('0' + (pastWeekDate.getMonth() + 1)).slice(-2) + "-" + ('0' + (pastWeekDate.getDate() + 1)).slice(-2);
  const formattedCurrentDate = currentDate.getFullYear() + "-" + ('0' + (currentDate.getMonth() + 1)).slice(-2) + "-" + ('0' + (pastWeekDate.getDate() + 1)).slice(-2);
  return [formattedPastDate, formattedCurrentDate];
};

export default getInitialDates;

export function getCurrentDate() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  const formattedDate = `${year}, ${formattedDay} ${formattedMonth}`;

  return formattedDate;
}

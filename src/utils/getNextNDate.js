export function getNextNDate(inputDate, n) {
  const resultDate = new Date(inputDate);
  resultDate.setDate(resultDate.getDate() + n);

  const year = resultDate.getFullYear();
  const day = resultDate.getDate();
  const month = resultDate.getMonth() + 1;

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  const formattedResult = `${year}, ${formattedDay} ${formattedMonth}`;

  return formattedResult;
}

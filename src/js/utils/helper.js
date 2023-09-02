const listOfDays = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];

const listOFMonths = [
  "Januari",
  "Februari",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export const formatDate = (data) => {
  const newDate = new Date(data);
  const day = newDate.getDay();
  const date = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  const formattedDay = listOfDays[day];
  const formattedMonth = listOFMonths[month];
  const formatedData =
    formattedDay + ", " + date + " " + formattedMonth + " " + year;
  return formatedData;
};

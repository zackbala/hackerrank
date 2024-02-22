const timeConversion = (input) => {
  const regex = /^(\d{2}):(\d{2}):(\d{2})([AP]M)$/;
  const match = input.match(regex);

  let hours = match[1];
  const minutes = match[2];
  const seconds = match[3];
  const period = match[4];

  if (period == "PM" && hours != "12") {
    hours = String(Number(hours) + 12)
  }
  if (period == "AM" && hours == "12") {
    hours = "00"
  }
  return `${hours}:${minutes}:${seconds}`
}

input = "07:05:45PM"
const convertedTime = timeConversion(input)
console.log(convertedTime)

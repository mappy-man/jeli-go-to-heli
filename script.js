const targetDate = new Date("September 18, 2026 23:00:00").getTime();


const zonedDate = Temporal.ZonedDateTime.from({
  timeZone: 'America/New_York',
  year: 2026,
  month: 9,
  day: 19,
  hour: 2,
  minute: 0,
  second: 0,
  millisecond: 0,
  microsecond: 0,
  nanosecond: 0
});


setInterval(() => {
  const now = Temporal.Now.zonedDateTimeISO();
  const convertedNow = now.withTimeZone("America/New_York");

 //const now = new Date().getTime();
 const distance = convertedNow.until(zonedDate);
 document.getElementById("days").textContent = Math.floor(distance.hours / 24);
 document.getElementById("hours").textContent = Math.floor(distance.hours % 24);
 document.getElementById("minutes").textContent = Math.floor(distance.minutes);
 document.getElementById("seconds").textContent = Math.floor(distance.seconds);
}, 1000);
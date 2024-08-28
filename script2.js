//   ********* New Delhi Time set *************
const delhiYear = now.getFullYear().toString();
const delhiMonth = now.getMonth().toString().padStart(2, 0);
const delhiDate = now.getDate().toString().padStart(2, 0);
let delhiDay = now.getDay();
delhiDay = week[delhiDay];
let delhiHour = now.getHours();
const delhiAmPm = delhiHour > 12 ? "PM" : "AM";
delhiHour = delhiHour % 12 || 12;
delhiHour = delhiHour.toString().padStart(2, 0);
const delhiMin = now.getMinutes().toString().padStart(2, 0);
const delhiSec = now.getSeconds().toString().padStart(2, 0);

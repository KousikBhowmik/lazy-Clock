const homePage = document.querySelector("#home-btn");
const timerPage = document.querySelector("#timer-btn");
const stopWatchPage = document.querySelector("#stopwatch-btn");

// *************** Home page Query Eelector's Start *************

const homeTime = document.querySelector(".home-time");
const homeDate = document.querySelector(".home-date");
const weekDay = document.querySelector(".week-day");
// const search = document.querySelector("");

// ********** Query Eelector : Delhi **************
const cityDelhiTime = document.querySelector(".new_delhi .city-time");
const cityDelhiDate = document.querySelector(".new_delhi .city-date");
// ********** Query Eelector : Barcelona **************
const cityBarcaTime = document.querySelector(".barcelona .city-time");
const cityBarcaDate = document.querySelector(".barcelona .city-date");
// ********** Query Eelector : New York **************
const citYorkTime = document.querySelector(".new_york .city-time");
const cityYorkDate = document.querySelector(".new_york .city-date");
// ********** Query Eelector : Beijing **************
const citBeijingTime = document.querySelector(".beijing .city-time");
const cityBeijingDate = document.querySelector(".beijing .city-date");
// ********** Query Eelector : Tokyo **************
const citTokyoTime = document.querySelector(".tokyo .city-time");
const cityTokyoDate = document.querySelector(".tokyo .city-date");
// ********** Query Eelector : London **************
const citLondonTime = document.querySelector(".london .city-time");
const cityLondonDate = document.querySelector(".london .city-date");

// *************** Home page Query Eelector's END *************

const week = [
  "Sunday",
  "Monday",
  "Thusday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function homePageFun() {
  function getTimeForCity(timeZone) {
    function hour(flag) {
      let tempHour = cityTime.getHours();
      const tempAmPm = tempHour >= 12 ? "PM" : "AM";
      tempHour = tempHour % 12 || 12;
      if (flag == 1) return tempHour.toString().padStart(2,"0");
      else if (flag == 2) return tempAmPm.toString();
    }
    const date = new Date().toLocaleString("en-US", { timeZone: timeZone });
    const cityTime = new Date(date);
    const timeObj = {
      year: cityTime.getFullYear().toString(),
      month: cityTime.getMonth().toString().padStart(2, "0"),
      day: cityTime.getDate().toString().padStart(2, "0"),
      weekDay: cityTime.getDay(),
      hour: hour(1),
      minute: cityTime.getMinutes().toString().padStart(2, "0"),
      second: cityTime.getSeconds().toString().padStart(2, "0"),
      ampm: hour(2),
    };

    return timeObj;
  }

  function settingTime() {
    const cities = {
      NewDelhi: "Asia/Kolkata",
      Barcelona: "Europe/Madrid",
      NewYork: "America/New_York",
      Beijing: "Asia/Shanghai",
      Tokyo: "Asia/Tokyo",
      London: "Europe/London",
    };

    const timeObj = {};

    for (const city in cities) {
      timeObj[city] = getTimeForCity(cities[city]);
    }

    return timeObj;
  }

  const gettingTime = settingTime();

  const newDelhi = gettingTime["NewDelhi"];
  const barcelona = gettingTime["Barcelona"];
  const newYork = gettingTime["NewYork"];
  const beijing = gettingTime["Beijing"];
  const tokyo = gettingTime["Tokyo"];
  const london = gettingTime["London"];


  homeTime.innerHTML = `${newDelhi["hour"]}:${newDelhi["minute"]}:${newDelhi["second"]} ${newDelhi["ampm"]}`;
  homeDate.innerHTML = `${newDelhi["day"]}:${newDelhi["month"]}:${newDelhi["year"]}`;
  weekDay.innerHTML = week[newDelhi["weekDay"]];

  cityDelhiTime.innerHTML = `${newDelhi["hour"]}:${newDelhi["minute"]}:${newDelhi["second"]} ${newDelhi["ampm"]}`;
  cityDelhiDate.innerHTML = `${newDelhi["day"]}:${newDelhi["month"]}:${newDelhi["year"]}`;

  cityBarcaTime.innerHTML = `${barcelona["hour"]}:${barcelona["minute"]}:${barcelona["second"]} ${barcelona["ampm"]}`;
  cityBarcaDate.innerHTML = `${barcelona["day"]}:${barcelona["month"]}:${barcelona["year"]}`;

  citYorkTime.innerHTML = `${newYork["hour"]}:${newYork["minute"]}:${newYork["second"]} ${newYork["ampm"]}`;
  cityYorkDate.innerHTML =`${newYork["day"]}:${newYork["month"]}:${newYork["year"]}`;
  
  citBeijingTime.innerHTML =`${beijing["hour"]}:${beijing["minute"]}:${beijing["second"]} ${beijing["ampm"]}`;
  cityBeijingDate.innerHTML =`${beijing["day"]}:${beijing["month"]}:${beijing["year"]}`;
  
  citTokyoTime.innerHTML =`${tokyo["hour"]}:${tokyo["minute"]}:${tokyo["second"]} ${tokyo["ampm"]}`;
  cityTokyoDate.innerHTML =`${tokyo["day"]}:${tokyo["month"]}:${tokyo["year"]}`;
  
  citLondonTime.innerHTML =`${london["hour"]}:${london["minute"]}:${london["second"]} ${london["ampm"]}`;
  cityLondonDate.innerHTML = `${london["day"]}:${london["month"]}:${london["year"]}`;

}

let homeInterval = setInterval(homePageFun, 1000);

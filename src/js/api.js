//Options
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

//Elements from the cards
const workHours = document.getElementById("work-hours");
const workLast = document.getElementById("work-last");
const playHours = document.getElementById("play-hours");
const playLast = document.getElementById("play-last");
const exerciseHours = document.getElementById("exercise-hours");
const exerciseLast = document.getElementById("exercise-last");
const socialHours = document.getElementById("social-hours");
const socialLast = document.getElementById("social-last");
const selfHours = document.getElementById("self-hours");
const selfLast = document.getElementById("self-last");
const studyHours = document.getElementById("study-hours");
const studyLast = document.getElementById("study-last");

//Extract data
const url = "src/js/data.json";

//Change if the element other element has already the class 'selected'
let choosen = null;

function addClass(e) {
  if (choosen == null) {
    choosen = e.target;
    addActive(e.target, true);
  } else if (choosen != e.target) {
    addActive(choosen, false);
    choosen = e.target;
    addActive(e.target, true);
  } else if (choosen == e.target) {
    choosen = null;
    addActive(e.target, false);
  } else {
    choosen = e.target;
    addActive(e.target, true);
  }
}

function addActive(element, bool) {
  if (bool) {
    element.classList.add("selected");
  } else {
    element.classList.remove("selected");
  }
}

//Daily
daily.addEventListener("click", showDaily);

function showDaily(e) {
  addClass(e);

  fetch(url)
    .then((response) => response.json())
    .then((json) => showDailyStats(json));
}

function showDailyStats(stats) {
  workHours.innerHTML = `${stats[0].timeframes.daily.current}hrs`;
  workLast.innerHTML = `Last day - ${stats[0].timeframes.daily.previous}hrs`;

  playHours.innerHTML = `${stats[1].timeframes.daily.current}hrs`;
  playLast.innerHTML = `Last day - ${stats[1].timeframes.daily.previous}hrs`;

  studyHours.innerHTML = `${stats[2].timeframes.daily.current}hrs`;
  studyLast.innerHTML = `Last day - ${stats[2].timeframes.daily.previous}hrs`;

  exerciseHours.innerHTML = `${stats[3].timeframes.daily.current}hrs`;
  exerciseLast.innerHTML = `Last day - ${stats[3].timeframes.daily.previous}hrs`;

  socialHours.innerHTML = `${stats[4].timeframes.daily.current}hrs`;
  socialLast.innerHTML = `Last day - ${stats[4].timeframes.daily.previous}hrs`;

  selfHours.innerHTML = `${stats[5].timeframes.daily.current}hrs`;
  selfLast.innerHTML = `Last day - ${stats[5].timeframes.daily.previous}hrs`;
}

//Weekly
weekly.addEventListener("click", showweekly);

function showweekly(e) {
  addClass(e);
  fetch(url)
    .then((response) => response.json())
    .then((json) => showweeklyStats(json));
}

function showweeklyStats(stats) {
  workHours.innerHTML = `${stats[0].timeframes.weekly.current}hrs`;
  workLast.innerHTML = `Last day - ${stats[0].timeframes.weekly.previous}hrs`;

  playHours.innerHTML = `${stats[1].timeframes.weekly.current}hrs`;
  playLast.innerHTML = `Last day - ${stats[1].timeframes.weekly.previous}hrs`;

  studyHours.innerHTML = `${stats[2].timeframes.weekly.current}hrs`;
  studyLast.innerHTML = `Last day - ${stats[2].timeframes.weekly.previous}hrs`;

  exerciseHours.innerHTML = `${stats[3].timeframes.weekly.current}hrs`;
  exerciseLast.innerHTML = `Last day - ${stats[3].timeframes.weekly.previous}hrs`;

  socialHours.innerHTML = `${stats[4].timeframes.weekly.current}hrs`;
  socialLast.innerHTML = `Last day - ${stats[4].timeframes.weekly.previous}hrs`;

  selfHours.innerHTML = `${stats[5].timeframes.weekly.current}hrs`;
  selfLast.innerHTML = `Last day - ${stats[5].timeframes.weekly.previous}hrs`;
}

//Monthly
monthly.addEventListener("click", showmonthly);

function showmonthly(e) {
  addClass(e);

  fetch(url)
    .then((response) => response.json())
    .then((json) => showmonthlyStats(json));
}

function showmonthlyStats(stats) {
  workHours.innerHTML = `${stats[0].timeframes.monthly.current}hrs`;
  workLast.innerHTML = `Last day - ${stats[0].timeframes.monthly.previous}hrs`;

  playHours.innerHTML = `${stats[1].timeframes.monthly.current}hrs`;
  playLast.innerHTML = `Last day - ${stats[1].timeframes.monthly.previous}hrs`;

  studyHours.innerHTML = `${stats[2].timeframes.monthly.current}hrs`;
  studyLast.innerHTML = `Last day - ${stats[2].timeframes.monthly.previous}hrs`;

  exerciseHours.innerHTML = `${stats[3].timeframes.monthly.current}hrs`;
  exerciseLast.innerHTML = `Last day - ${stats[3].timeframes.monthly.previous}hrs`;

  socialHours.innerHTML = `${stats[4].timeframes.monthly.current}hrs`;
  socialLast.innerHTML = `Last day - ${stats[4].timeframes.monthly.previous}hrs`;

  selfHours.innerHTML = `${stats[5].timeframes.monthly.current}hrs`;
  selfLast.innerHTML = `Last day - ${stats[5].timeframes.monthly.previous}hrs`;
}

/* ******variables****** */
const mainHeading = document.getElementById("main-heading");
const timeBoxes = document.getElementById("time-boxes");
const fourteenDays = 1209600000;
const countDownDate = new Date().getTime() + fourteenDays;
const countDownTimer = setInterval(countDownFn, 1000);

/* ******functions****** */
function countDownFn() {
  const now = new Date().getTime();
  const timeLeft = countDownDate - now;
  const days = String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const hours = String(
    Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((timeLeft % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  // update html
  mainHeading.innerHTML = `WE'RE LAUNCHING SOON`;
  timeBoxes.innerHTML = `
  <div class="time-box-container">
        <div class="time-box">
          <div class="top-flip"></div>
          <div class="bottom-flip"></div>
          <p class="digits" id="days">${days}</p>
        </div>
        <p class="title">DAYS</p>
      </div>
      <div class="time-box-container">
        <div class="time-box">
          <div class="top-flip"></div>
          <div class="bottom-flip"></div>
          <p class="digits" id="hours">${hours}</p>
        </div>
        <p class="title">HOURS</p>
      </div>
      <div class="time-box-container">
        <div class="time-box">
          <div class="top-flip"></div>
          <div class="bottom-flip"></div>
          <p class="digits" id="minutes">${minutes}</p>
        </div>
        <p class="title">MINUTES</p>
      </div>
      <div class="time-box-container">
        <div class="time-box">
          <div class="top-flip"></div>
          <div class="bottom-flip"></div>
          <p class="digits" id="seconds">${seconds}</p>
        </div>
        <p class="title">SECONDS</p>
  </div>`;
}

/* ******event listeners****** */

const countdown = document.querySelector(".countdown");

//Set Launch Date
const launchdate = new Date("october 31, 2023 00:00:00").getTime();

//update every second
const intvl = setInterval(() => {
  //Get Todays date and time (ms)
  const now = new Date().getTime();

  //Distance from now to the launch date
  const Distance = launchdate - now;

  // Time Calculations
  const days = Math.floor(Distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (Distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((Distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((Distance % (1000 * 60)) / 1000);

  //display result
  countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
    `;

  // If launch date passed
  if (Distance < 0) {
    //stop countdown
    clearInterval(intvl);
    //style and output text
    countdown.style.color = "#ee6161";
    countdown.innerHTML = "Launched!";
  }
}, 1000);

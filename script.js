const date = document.getElementById("date");
const day = document.getElementById("day");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const session = document.getElementById("session");
const toggleBtn = document.getElementById("toggle-btn");

// Function to get the current date and time
function getCurrentDateTime() {
  const now = new Date();
  const month = now.toLocaleString('default', { month: 'long' });
  const dateText = `${month} ${now.getDate()}, ${now.getFullYear()}`;
  const dayText = now.toLocaleString('default', { weekday: 'long' });
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let sessionText = "AM";

  // Convert hour to 12-hour format
  if (hour > 12) {
    hour -= 12;
    sessionText = "PM";
  }

  // Add leading zero to minute and second if they are less than 10
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  // Update the UI with the current date and time
  date.textContent = dateText;
  day.textContent = dayText;
  hours.textContent = hour;
  minutes.textContent = min;
  seconds.textContent = sec;
  session.textContent = sessionText;
}

// Update the date and time every second
setInterval(getCurrentDateTime, 1000);

// Toggle between 12-hour and 24-hour time format
toggleBtn.addEventListener("click", function() {
  const currentHour = parseInt(hours.textContent);
  let newHour = currentHour;
  let sessionText = session.textContent;
  
  // Convert 12-hour format to 24-hour format
  if (sessionText === "PM" && currentHour !== 12) {
    newHour += 12;
  }
  if (sessionText === "AM" && currentHour === 12) {
    newHour = 0;
  }

  // Convert 24-hour format to 12-hour format
  if (sessionText === "") {
    sessionText = "AM";
  }
  if (newHour > 12) {
    newHour -= 12;
    sessionText = "PM";
  } else {
    sessionText = "AM";
  }

  // Add leading zero to hour if it is less than 10
  if (newHour < 10) {
    newHour = "0" + newHour;
  }

  // Update the UI with the new time format
  hours.textContent = newHour;
  session.textContent = sessionText;
});

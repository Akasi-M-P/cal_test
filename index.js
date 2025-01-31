const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "error";
  }
}

// THEME
const calBody = document.getElementById("container");
const themeBtn = document.getElementById("theme");

function changeTheme() {
  calBody.classList.toggle("dark-theme"); // Toggle dark theme on the container

  if (calBody.classList.contains("dark-theme")) {
    themeBtn.textContent = "💡"; // Light theme icon
  } else {
    themeBtn.textContent = "🌚"; // Dark theme icon
  }
}

// Clear the last character
function clearLastCharacter() {
  const currentValue = display.value;
  if (currentValue.length > 0) {
    display.value = currentValue.slice(0, -1);
  }
}

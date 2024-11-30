const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    const expression = display.value.trim();
    if (expression === "5*2-9") {
      display.value = "Kangennn :(";
    } else {
      display.value = eval(display.value);
    }
  } catch (error) {
    display.value = "tidak bisa";
  }
}

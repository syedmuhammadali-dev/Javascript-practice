var h1El = document.getElementById("h11");
var bulbEl = document.getElementById("bulb");
var btnEl = document.getElementById("btn");
var isOpen = false;
var h1 = document.getElementById("h1");

function onClick() {
  if (isOpen) {
    isOpen = false;
    bulbEl.src = "./images/bulb-off.jfif";
    btnEl.innerText = "Button On";
    h1El.innerText = "Bulb is Off";
  } else {
    isOpen = true;
    bulbEl.src = "./images/bulb-on.jfif";
    btnEl.innerText = "Button Off";
    h1El.innerText = "Bulb is On";
  }
}

function turnOn() {
  bulbEl.src = "./images/bulb-on.jfif";
}

function turnOff() {
  bulbEl.src = "./images/bulb-off.jfif";
}

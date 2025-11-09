const arr = ["1", "2", "3", "4", "5", "6"];

let count = 0;

let intervalId = setInterval(() => {
  if (count < 6) {
    console.log(arr[count]);
    count++;
  } else {
    count = 0;
  }
}, 2000);

let btn = document.createElement("button");
btn.textContent = "Stop Interval";
document.body.append(btn);

const clear = addEventListener("click", () => {
  clearInterval(intervalId);
});

const contentDiv = document.getElementById("content");
const fontDiv = document.getElementById("font_div");

setInterval(() => {
  const clock = new Date().toLocaleTimeString();
  contentDiv.innerHTML = `${clock}`;
}, 1000);

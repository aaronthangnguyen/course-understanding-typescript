let button;

button?.addEventListener("click", () => {
  console.log("Clicked!");
});

window.addEventListener("DOMContentLoaded", () => {
  button = document.querySelector("#button");
});

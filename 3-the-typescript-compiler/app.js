"use strict";
let button;
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log("Clicked!");
});
window.addEventListener("DOMContentLoaded", () => {
    button = document.querySelector("#button");
});

let appId = "abc";
const button = document.querySelector("button")!;

function add(one: number, two: number) {
  if (one + two > 0) {
    return one + two;
  }
  return;
}

function clickHandler(message: string) {
  // let userName = 'Max';
  console.log("Clicked! " + message);
}
// a comment
if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}

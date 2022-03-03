var userInput;
var userName;
userInput = 5;
userInput = "Max";
// "unknown" requires typecheck before assignment
if (typeof userInput === "string") {
    userName = userInput;
}
// "unknown" is better than "any"
// "never"
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("Something wrong happened!", 500);

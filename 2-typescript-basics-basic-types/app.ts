let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// "unknown" requires typecheck before assignment
if (typeof userInput === "string") {
  userName = userInput;
}
// "unknown" is better than "any"

// "never"
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("Something wrong happened!", 500);

"use strict";
function getString(name) {
    return "Amit";
}
getString("pramod");
// getString(123);
function getFirstResult(result) {
    return result[0]; // ! = non null assertion operator
}
let firstNumber = getFirstResult([200, 400, 500]);
let firstString = getFirstResult(["Login", "Signup", "Cart"]);
let firstBoolean = getFirstResult([true, false, true]);
console.log("First code:", firstNumber);
console.log("First test:", firstString);
console.log("First test:", firstBoolean);

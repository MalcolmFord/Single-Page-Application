// This section of code is linking the buttons from the html to the javascript, and adding an event listener as well
var a = document.getElementById("add").addEventListener("click", add);
var s = document.getElementById("subtract").addEventListener("click", subtract);
var m = document.getElementById("multiply").addEventListener("click", multiply);
var d = document.getElementById("divide").addEventListener("click", divide);
// This section of code is setting the varaibles to be able to take the value of num 1&2
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
// These are the actuall functions that will run if their respective button is clicked, also they will print the result to the console and the DOM
function add(a){
  let input1 = Number(num1.value);
  let input2 = Number(num2.value);
  let answer = input1 + input2;
  console.log(answer);
  document.getElementById("output").innerHTML = answer;
}
function subtract(a){
  let input1 = Number(num1.value);
  let input2 = Number(num2.value);
  let answer = input1 - input2;
  console.log(answer);
  document.getElementById("output").innerHTML = answer;

}
function multiply(a){
  let input1 = Number(num1.value);
  let input2 = Number(num2.value);
  let answer = input1 * input2;
  console.log(answer);
  document.getElementById("output").innerHTML = answer;

}
function divide(a){
  let input1 = Number(num1.value);
  let input2 = Number(num2.value);
  let answer = input1 / input2;
  console.log(answer);
  document.getElementById("output").innerHTML = answer;

}

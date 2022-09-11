// alert("hello");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".result");
const acButton = document.querySelector(".all-clear");
const delButton = document.querySelector(".delete");
const updatedCurrent = document.querySelector(".current");
let calculation = [];

numberButtons.forEach((button) => {
  button.addEventListener("click", pushNumber);
});

function pushNumber(button) {
  //   alert(this.innerHTML);
  calculation.push(this.innerHTML);
  updatedCurrent.value = calculation.join("");
}

operatorButtons.forEach((button) => {
  button.addEventListener("click", pushOperator);
});

function pushOperator(button) {
  //   alert(this.innerHTML);
  calculation.push(this.innerHTML);
  updatedCurrent.value = calculation.join("");
}

acButton.addEventListener("click", allClear);

function allClear(button) {
  calculation = [];
  num1 = "";
  num2 = "";
  operator = "";
  updatedCurrent.value = "0";
}

delButton.addEventListener("click", deleteLast);

function deleteLast(button) {
  calculation.pop();
  updatedCurrent.value = calculation.join("");
}

equalButton.addEventListener("click", calculate);

function calculate(button) {
  //   alert(calculation);
  let num1 = "";
  let num2 = "";
  let operator = "";
  let maths = "+−×÷";

  for (i = 0; i < calculation.length; i++) {
    if (maths.includes(calculation[i])) {
      operator += calculation[i];
    } else if (operator === undefined) {
      num1 += calculation[i];
    } else {
      num2 += calculation[i];
    }
  }
  switch (operator) {
    case "+":
      return num1 + num2;
    case "−":
      return num1 - num2;
    case "×":
      return num1 * num2;
    case "÷":
      return num1 / num2;
  }

  updatedCurrent.value = calculation.join("");
}

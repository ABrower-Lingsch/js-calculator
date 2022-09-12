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
  updatedCurrent.innerText = calculation.join("");
}

operatorButtons.forEach((button) => {
  button.addEventListener("click", pushOperator);
});

function pushOperator(button) {
  //   alert(this.innerHTML);
  calculation.push(this.innerHTML);
  updatedCurrent.innerText = calculation.join("");
}

acButton.addEventListener("click", allClear);

function allClear(button) {
  calculation = [];
  num1 = "";
  num2 = "";
  operator = "";
  updatedCurrent.innerText = "";
}

delButton.addEventListener("click", deleteLast);

function deleteLast(button) {
  calculation.pop();
  updatedCurrent.innerText = calculation.join("");
}

equalButton.addEventListener("click", calculate);

function calculate(button) {
  //   alert(calculation);
  let num1 = "";
  let num2 = "";
  let operator = null;
  const operators = ["+", "−", "×", "÷"];
  let answer;

  for (let i = 0; i < calculation.length; i++) {
    const calcChar = calculation[i];
    if (operators.includes(calcChar)) {
      operator = calcChar;
    } else if (!operator) {
      num1 += calcChar;
    } else {
      num2 += calcChar;
    }
  }

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (operator === "+") {
    answer = num1 + num2;
  } else if (operator === "−") {
    answer = num1 - num2;
  } else if (operator === "×") {
    answer = num1 * num2;
  } else if (operator === "÷") {
    answer = num1 / num2;
  }

  const finalAnswer = answer;
  updatedCurrent.innerText = finalAnswer;
}

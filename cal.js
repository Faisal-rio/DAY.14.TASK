function appendNumber(num) {
  document.getElementById("result").value += num;
}

function appendOperator(operator) {
  const currentResult = document.getElementById("result").value;
  const lastChar = currentResult.charAt(currentResult.length - 1);

  if (currentResult !== "" && !isNaN(parseInt(lastChar))) {
    document.getElementById("result").value += operator;
  } else {
    alert("Only numbers are allowed");
  }
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculateResult() {
  const expression = document.getElementById("result").value;
  try {
    const result = eval(expression);
    document.getElementById("result").value = result;
  } catch (error) {
    alert("Invalid expression");
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  const isNumber = !isNaN(key);

  if (isNumber) {
    appendNumber(key);
  } else {
    alert("Only numbers are allowed");
  }
});

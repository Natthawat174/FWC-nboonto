const form = document.getElementById("calcForm");
const leftInput = document.getElementById("leftNum");
const rightInput = document.getElementById("rightNum");
const operatorSelect = document.getElementById("operator");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const left = leftInput.value;
    const right = rightInput.value;
    const operator = operatorSelect.value;

    if (!isPositiveInteger(left) || !isPositiveInteger(right)) {
        alert("Error :(");
        return;
    }

    const leftNum = parseInt(left);
    const rightNum = parseInt(right);

    if ((operator === "/" || operator === "%") && rightNum === 0) {
        alert("It's over 9000!");
        return;
    }

    let result;
    switch (operator) {
        case "+":
            result = leftNum + rightNum;
            break;
        case "-":
            result = leftNum - rightNum;
            break;
        case "*":
            result = leftNum * rightNum;
            break;
        case "/":
            result = leftNum / rightNum;
            break;
        case "%":
            result = leftNum % rightNum;
            break;
    }

    alert(result);
});

function isPositiveInteger(value) {
    return /^\d+$/.test(value);
}

setInterval(function() {
    alert("Please, use me...");
}, 30000);
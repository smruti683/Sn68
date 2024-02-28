document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            if (button.innerText === "=") {
                calculateResult();
            } else if (button.innerText === "C") {
                clearDisplay();
            } else {
                addToDisplay(button.innerText);
            }
        });
    });
});

function addToDisplay(value) {
    document.getElementById("display").value += value;
}
 
function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    const expression = document.getElementById("display").value;
    const result = eval(expression);
    document.getElementById("display").value = result;
}
let checkButtonEl = document.getElementById("checkButton");
let restartButtonEl = document.getElementById("restartButton");

let firstValueEl = document.getElementById("firstNumber");
firstValueEl.textContent = Math.ceil(Math.random() * 100);

let secondValueEl = document.getElementById("secondNumber");
secondValueEl.textContent = Math.ceil(Math.random() * 100);

let inputEl = document.getElementById("userInput");
let gameResultEl = document.getElementById("gameResult");

checkButtonEl.onclick = function() {
    if (parseInt(firstValueEl.textContent) + parseInt(secondValueEl.textContent) === parseInt(inputEl.value)) {
        gameResultEl.textContent = "Congratulations, You got it Right!";
        gameResultEl.style.backgroundColor = "#028a0f";
    } else {
        gameResultEl.textContent = "Please try again!";
        gameResultEl.style.backgroundColor = "#1e217c";
    }
};

restartButtonEl.onclick = function() {
    firstValueEl.textContent = Math.ceil(Math.random() * 100);
    secondValueEl.textContent = Math.ceil(Math.random() * 100);
    gameResultEl.textContent = "";
    inputEl.value = "";
}
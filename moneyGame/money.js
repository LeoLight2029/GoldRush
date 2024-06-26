let totalMoney = 0;
let timer;
const gameDuration = 5;
let timeLeft = gameDuration;
let clickCount = 0;
let gameStarted = false;

function startOrPlayGame() {
    if (!gameStarted) {
        startGame();
    } else {
        earnMoney();
    }
}

function startGame() {
    totalMoney = 0;
    clickCount = 0;
    timeLeft = gameDuration;
    gameStarted = true;
    updateTotalMoney();
    updateTimer();

    document.getElementById('gameButton').textContent = 'Click Me!';
    timer = setInterval(countDown, 1000);
}

function countDown() {
    if (timeLeft > 0) {
        timeLeft--;
        updateTimer();
    } else {
        clearInterval(timer);
        endGame();
    }
}

function endGame() {
    gameStarted = false;
    document.getElementById('gameButton').textContent = 'Start Game';
    document.getElementById('gameButton').disabled=true;
    localStorage.setItem('cash', clickCount*10)
    window.location.href = '../textScreens/transportText2.html';
}

function earnMoney() {
    clickCount++;
    totalMoney = clickCount * 10;
    updateTotalMoney();
}

function updateTotalMoney() {
    document.getElementById('totalMoney').textContent = totalMoney;
}

function updateTimer() {
    document.getElementById('timer').textContent = `Time Left: ${timeLeft}s`;
}

function checkHearts() {
    let hearts = parseInt(localStorage.getItem('heart'), 10) || 0;
    let cash = parseInt(localStorage.getItem('cash'),10 || 0)
    if (hearts <= 0 || cash <=0) {
        window.location.href = '../deathScreen/death.html'; 
    }
}

setInterval(checkHearts, 1000);
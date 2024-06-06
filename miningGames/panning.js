let score;
let timeLeft;
let timerId;

function setHeart(number){
    localStorage.setItem('heart', number)
}
function setCash(number){
    localStorage.setItem('cash', number)
}

function nextPage(){
    window.location.href='../randomEvent/randomEvent.html'
}

function startGame() {
  score = 0;
  timeLeft = 15;
  updateScore();
  updateTimer();

  const existingNuggets = document.querySelectorAll(".gold-nugget");
  existingNuggets.forEach(nugget => nugget.remove());

  timerId = setInterval(decreaseTime, 1000);

  generateNuggets();

  const goldPan = document.getElementById("goldPan");
  goldPan.addEventListener("click", collectGold);
}

function decreaseTime() {
  timeLeft--;
  updateTimer();

  if (timeLeft === 0) {
    endGame();
  }
}

function collectGold(event) {
    if (event.target.classList.contains("gold-nugget")) {
      event.target.remove();
      score++;
      updateScore();
      generateNugget();
    }
}
function generateNugget() {
    const goldPan = document.getElementById("goldPan");
    const numNuggets = 1
  
    for (let i = 0; i < numNuggets; i++) {
      const nuggetX = Math.floor(Math.random() * 750);
      const nuggetY = Math.floor(Math.random() * 750); 
      const goldNugget = document.createElement("div");
      goldNugget.classList.add("gold-nugget");
      goldNugget.style.left = `${nuggetX}px`;
      goldNugget.style.top = `${nuggetY}px`;
      goldPan.appendChild(goldNugget);
    }
  }
  

function generateNuggets() {
  const goldPan = document.getElementById("goldPan");
  const numNuggets = Math.floor(Math.random() * 11)+5;

  for (let i = 0; i < numNuggets; i++) {
    const nuggetX = Math.floor(Math.random() * 750);
    const nuggetY = Math.floor(Math.random() * 750); 
    const goldNugget = document.createElement("div");
    goldNugget.classList.add("gold-nugget");
    goldNugget.style.left = `${nuggetX}px`;
    goldNugget.style.top = `${nuggetY}px`;
    goldPan.appendChild(goldNugget);
  }
}

function updateScore() {
  document.getElementById("scoreValue").textContent = score;
}

function updateTimer() {
  document.getElementById("timeLeft").textContent = timeLeft;
}
let day = localStorage.getItem('day')

function endGame() {
    clearInterval(timerId);
    let value;
    if(day==='1'){
        value=7;
    }else if(day==='2'){
        value=3
    }else{
        value=1 
    }
    Swal.fire({
      title: 'Congrats',
      text: `You have found ${score} bits of gold, which is $${score*value}`,
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor:'#0000FF'
    }).then(nextPage);
  }
let score = 0;
let timeLeft = 30;
let timerId;
let miner;
let mine;
updateInfo()

let cash = parseInt(localStorage.getItem('cash'),10)
let heart = parseInt(localStorage.getItem('heart'), 10)

function updateInfo() {
    document.getElementById('info').textContent = `Hearts: ${localStorage.getItem('heart')} Cash: $${localStorage.getItem('cash')}`;
}

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
  timeLeft = 30;
  updateScore();
  updateTimer();

  mine = document.getElementById('mine');
  mine.innerHTML = '';

  miner = document.createElement('div');
  miner.classList.add('miner');
  mine.appendChild(miner);

  document.addEventListener('keydown', moveMiner);

  timerId = setInterval(decreaseTime, 1000);

  generateGold();
}

function decreaseTime() {
  if (timeLeft > 0) {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      endGame();
    }
  }
}

function moveMiner(event) {
  const minerRect = miner.getBoundingClientRect();
  const mineRect = mine.getBoundingClientRect();

  switch (event.key) {
    case 'ArrowLeft':
      if (minerRect.left > mineRect.left) {
        miner.style.left = miner.offsetLeft - 20 + 'px';
      }
      break;
    case 'ArrowRight':
      if (minerRect.right < mineRect.right) {
        miner.style.left = miner.offsetLeft + 20 + 'px';
      }
      break;
    case 'ArrowUp':
      if (minerRect.top > mineRect.top) {
        miner.style.top = miner.offsetTop - 20 + 'px';
      }
      break;
    case 'ArrowDown':
      if (minerRect.bottom < mineRect.bottom) {
        miner.style.top = miner.offsetTop + 20 + 'px';
      }
      break;
  }

  collectGold();
}

function generateGold() {
  const gold = document.createElement('div');
  gold.classList.add('gold');
  gold.style.left = Math.random() * (mine.clientWidth - 20) + 'px';
  gold.style.top = Math.random() * (mine.clientHeight - 20) + 'px';
  mine.appendChild(gold);
}

function collectGold() {
  const golds = document.querySelectorAll('.gold');
  golds.forEach(gold => {
    if (isColliding(miner, gold)) {
      gold.remove();
      score++;
      updateScore();
      generateGold();
    }
  });
}

function isColliding(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top > bRect.bottom ||
    aRect.bottom < bRect.top ||
    aRect.left > bRect.right ||
    aRect.right < bRect.left
  );
}

function updateScore() {
  document.getElementById('scoreValue').textContent = score;
}

function updateTimer() {
  document.getElementById('timeLeft').textContent = timeLeft;
}

function endGame() {
  clearInterval(timerId);
  document.removeEventListener('keydown', moveMiner);
  setCash(parseInt(localStorage.getItem('cash'))+(score*15))
  Swal.fire({
    title: 'Congrats!',
    text: `You have made $${score*15}`,
    icon: 'success',
    confirmButtonText: 'OK',
    confirmButtonColor:'#0000FF'
  }).then(nextPage);
}

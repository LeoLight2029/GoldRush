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

document.getElementById('score').textContent=`Your Final Score is ${(cash*35)+(heart*125)}`
localStorage.setItem('highscore', (cash*35)+(heart*125))

function playAgain(){
    localStorage.clear()
    localStorage.setItem('highscore', (cash*35)+(heart*125))
    window.location.href='../index.html'
}
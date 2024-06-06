function chooserace(){
    window.location.href='textScreens/raceText.html'
}
let highscoreValue = localStorage.getItem('highscore');

if (highscoreValue) {
    document.getElementById('info').classList.remove('hidden')
    document.getElementById('info').textContent = `High Score: ${highscoreValue}`
}
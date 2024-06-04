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
    window.location.href='food2.html'
}
function market(){
    localStorage.setItem('store', 'market')
    nextPage()
}

function farm(){
    localStorage.setItem('store', 'farm')
    nextPage()
}
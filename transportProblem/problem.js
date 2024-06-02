document.getElementById('info').textContent=`Hearts: ${localStorage.getItem('heart')} Cash: $${localStorage.getItem('cash')}`

let cash = parseInt(localStorage.getItem('cash'),10)
let heart = parseInt(localStorage.getItem('heart'), 10)

function updateInfo() {
    document.getElementById('info').textContent = `Hearts: ${localStorage.getItem('heart')} Cash: ${localStorage.getItem('cash')}`;
}

function nextPage(){
    window.location.href='NEXTPAGEHERE'
}
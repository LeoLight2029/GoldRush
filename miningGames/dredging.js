let cash = 0
let dredge = 10

function updateInfo() {
    document.getElementById('info').textContent = `Dredges Left: ${dredge} | Gold Collected: $${cash}`;
}

function setCash(number) {
    localStorage.setItem('cash', number);
}
function nextPage(){
    window.location.href='../randomEvent/randomEvent.html'
}

function handleCellClick(event) {
    let chance;
    if(localStorage.getItem('day')==='2'){
        chance=.35
    }else{
        chance=.1
    }

    if (dredge > 0) {
        dredge -= 1;

        if (Math.random() < chance) {
            const foundGold = Math.floor(Math.random() * 100) + 25;
            cash += foundGold;
            event.target.textContent = '🥇';
            Swal.fire('You found gold!', `Value: $${foundGold}`, 'success');
        } else {
            event.target.textContent = '🌊';
        }

        event.target.removeEventListener('click', handleCellClick);
        event.target.style.cursor = 'default';

        updateInfo();
    }

    if (dredge === 0) {
        setCash(parseInt(localStorage.getItem('cash'))+cash)
        Swal.fire({
            title: 'Game Over',
            text: `You have no dredges left. You made a total of $${cash}`,
            icon: 'warning',
            confirmButtonText: 'OK',
            confirmButtonColor:'#0000FF'
          }).then(nextPage);
    }
}

function setupRiver() {
    const river = document.getElementById('river');
    river.innerHTML = '';
    for (let i = 0; i < 40; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', handleCellClick);
        river.appendChild(cell);
    }
}

function initGame() {
    updateInfo();
    setupRiver();
}

initGame();

let cash = 0;
let heart = parseInt(localStorage.getItem('heart'), 10)
let attempts = 5;

function updateInfo() {
    document.getElementById('info').textContent = `Attempts: ${attempts} Cash: $${cash}`;
}
function setCash(number){
    localStorage.setItem('cash', number);
}
function nextPage(){
    window.location.href='../randomEvent/randomEvent.html'
}

function rockCradle() {
    const rockButton = document.getElementById('rockButton');
    rockButton.disabled = true;
    const goldContainer = document.getElementById('goldContainer');
    const goldImage = document.getElementById('goldImage');
    const maxRight = goldContainer.offsetWidth - goldImage.offsetWidth;
    let position = 0;
    const interval = setInterval(() => {
        if (position < maxRight) {
            position += 5;
            goldImage.style.left = position + 'px';
        } else {
            clearInterval(interval);
            goldImage.classList.add('rocking');
            setTimeout(() => {
                collectGold();
                goldImage.classList.remove('rocking');
                attempts--;
                updateInfo();
                if (attempts > 0) {
                    rockButton.disabled = false;
                } else {
                    rockButton.textContent = 'Out of attempts';
                    rockButton.disabled = true;
                    setCash(parseInt(localStorage.getItem('cash'))+cash)
                    Swal.fire({
                        title: 'You are out of Attempts',
                        text: `Congratulations you made $${cash}`,
                        icon: 'warning',
                        confirmButtonText: 'OK',
                        confirmButtonColor:'#0000FF'
                      }).then(nextPage);
                }
            }, 1500);
        }
    }, 50);
}

function collectGold() {
    const chance = Math.random();
    if (chance < 0.35) {
        const goldAmount = Math.floor(Math.random() * 100) + 50;
        cash += goldAmount;
        updateInfo();
        Swal.fire('Gold Rush!', `You've collected ${goldAmount} gold!`, 'success');
    } else {
        Swal.fire('Mining Failed', 'You did not find any gold.', 'error');
    }
}

updateInfo();
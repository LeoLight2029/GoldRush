updateInfo()

let cash = parseInt(localStorage.getItem('cash'),10)
let heart = parseInt(localStorage.getItem('heart'), 10)

function updateInfo() {
    document.getElementById('info').textContent = `Hearts: ${localStorage.getItem('heart')} Cash: $${localStorage.getItem('cash')}`;
}
function checkHearts() {
    let hearts = parseInt(localStorage.getItem('heart'), 10) || 0;
    let cash = parseInt(localStorage.getItem('cash'),10 || 0)
    if (hearts <= 0 || cash <=0) {
        window.location.href = '../deathScreen/death.html'; 
    }
}

setInterval(checkHearts, 1000);

function nextPage(){
    window.location.href='../transportProblem/problem.html'
}

function bet(){
    let amount = parseInt(document.getElementById('input').value, 10);

    if (cash<=0){
        Swal.fire({
            title: 'You broke',
            text: 'You don\'t got any money to bet with 💀',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#0000FF'
        });
    }else if(isNaN(amount) || amount <= 0 || amount > cash){
        Swal.fire({
            title: 'Invalid Bet',
            text: 'Bro put an actual amount of money you have',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#0000FF'
        });
    } else{
        let chance = Math.floor(Math.random()*100)

        if(chance <=25){
            Swal.fire({
                title: 'Yippeeee',
                text: `You won $${amount}`,
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#0000FF'
            });
            cash+=amount
            localStorage.setItem('cash', cash)
            updateInfo()
        }else{
            Swal.fire({
                title: ':((',
                text: `You lost $${amount}`,
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#0000FF'
            });
            cash-=amount
            localStorage.setItem('cash', cash)
            updateInfo()
        }
    }
}
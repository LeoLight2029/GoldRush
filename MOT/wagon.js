let cash = parseInt(localStorage.getItem('cash'), 10);
let heart = parseInt(localStorage.getItem('heart'), 10);
let item1 = 0;

function setHeart(number) {
    localStorage.setItem('heart', number);
}

function setCash(number) {
    localStorage.setItem('cash', number);
}

function updateInfo() {
    document.getElementById('info').textContent = `Hearts: ${localStorage.getItem('heart')} Cash: $${localStorage.getItem('cash')}`;
}

function nextPage() {
    window.location.href = 'NEXTPAGEHERE';
}

function logValues() {
    let items = [];
    for (let i = 2; i <= 10; i++) {
        let value = parseInt(document.getElementById('item' + i).value, 10);
        items.push(isNaN(value) ? 0 : value);
    }
    return items;
}

function totalSum() {
    let items = logValues();
    return items[0] * 10 + items[1] * 25 + items[2] * 2 + items[3] * 0.5 + items[4] * 0.5 + items[5] * 5 + items[6] * 5 + items[7] * 7.5 + items[8] * 10 + item1;
}

function updateTotalUsed() {
    document.getElementById('used').innerText = 'Total Used: $' + totalSum();
}

window.onload = function () {
    for (let i = 2; i <= 10; i++) {
        document.getElementById('item' + i).addEventListener('input', updateTotalUsed);
    }
    updateInfo();
}

function cheap() {
    document.getElementById('cheap').classList.add('selected');
    document.getElementById('medium').classList.remove('selected');
    document.getElementById('expensive').classList.remove('selected');
    localStorage.setItem('wagon', 'cheap');
    item1 = 25;
    updateTotalUsed();
}

function medium() {
    document.getElementById('cheap').classList.remove('selected');
    document.getElementById('medium').classList.add('selected');
    document.getElementById('expensive').classList.remove('selected');
    localStorage.setItem('wagon', 'medium');
    item1 = 50;
    updateTotalUsed();
}

function expensive() {
    document.getElementById('cheap').classList.remove('selected');
    document.getElementById('medium').classList.remove('selected');
    document.getElementById('expensive').classList.add('selected');
    localStorage.setItem('wagon', 'expensive');
    item1 = 75;
    updateTotalUsed();
}

async function confirmPurchase() {
    const result = await Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to confirm your purchase?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0000FF',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Continue'
    });

    if (result.isConfirmed) {
        confirm();
    }
}

async function confirm() {
    let totalUsed = totalSum();
    const random = Math.floor(Math.random() * 100);
    let items = logValues();
    let cash = parseInt(localStorage.getItem('cash'), 10);
    let error = false;

    if (totalUsed > cash) {
        await Swal.fire({
            title: 'Not Enough Money',
            text: 'Guys, let\'s try not to spend money we don\'t have.',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#0000FF'
        });
        error = true;
    }

    if (item1 === 0) {
        await Swal.fire({
            title: 'Wagon',
            text: 'Alright guys, how are we gonna get to Cali without a wagon?',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#0000FF'
        });
        error = true;
    }

    if (totalUsed < 0) {
        await Swal.fire({
            title: 'Negative Used',
            text: 'Do you really want to owe a cow to someone?',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#0000FF'
        });
        error = true;
    }

    if (!error) {
        cash -= totalUsed;
        setCash(cash);
        updateInfo();

        if (items[0] + items[1] < 4) {
            await Swal.fire({
                title: 'Not Enough Animals',
                text: 'Unfortunately, you didn\'t have enough animals, so you broke down and had to pay for an extra oxen for double the price.',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#0000FF'
            });
            cash -= 50;
            setCash(cash);
            updateInfo();
            error = true;
        }

        if (items[2] + items[3] + items[4] < 20) {
            await Swal.fire({
                title: 'Not Enough Food',
                text: 'Alright, so you were halfway through your journey when you realized you didn\'t have enough food and had to buy the scammer\'s rice for triple the price.',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#0000FF'
            });
            cash -= 20;
            setCash(cash);
            updateInfo();
            error = true;
        }

        if (items[5] < 1) {
            await Swal.fire({
                title: 'No Map',
                text: 'You got lost and somehow ended up in China, and had to swim the rest of the way to Cali, so you lost a heart',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#0000FF'
            });
            heart -= 1;
            setHeart(heart);
            updateInfo();
            error = true;
        }

        if (items[6] < (items[0] + items[1])) {
            await Swal.fire({
                title: 'Not enough harnesses',
                text: 'You didn\'t have a harness for each of your animals, so they ran away, and you had to pay for new ones at double the price',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#0000FF'
            });
            cash -= 50;
            setCash(cash);
            updateInfo();
            error = true;
        }

        if (items[7] < 4) {
            await Swal.fire({
                title: 'Not Enough Water',
                text: 'You didn\'t pack enough water, so you went to a nearby oasis, where you were robbed $25',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#0000FF'
            });
            cash -= 25;
            setCash(cash);
            updateInfo();
            error = true;
        }

        if (items[8] < 1) {
            await Swal.fire({
                title: 'Not Enough Tools',
                text: 'You\'re wagon had a single loose bolt, however you didn\'t have any tools, so your entire wagon fell apart and had to pay $20 to repair it',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#0000FF'
            });
            cash -= 20;
            setCash(cash);
            updateInfo();
            error = true;
        }

        if (localStorage.getItem('wagon') === 'cheap' && random <= 50) {
            await Swal.fire({
                title: 'Your Wagon Broke Down',
                text: 'Your cheap wagon broke before the first day even past and you had to buy a new one for 100$',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#0000FF'
            });
            cash -= 100;
            setCash(cash);
            updateInfo();
            error = true;
        } else if (localStorage.getItem('wagon') === 'medium' && random <= 25) {
            await Swal.fire({
                title: 'Not Enough Tools',
                text: 'Your medium wagon was a day\'s journey away from California when it broke down and you had to buy a new one for $100',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#0000FF'
            });
            cash -= 100;
            setCash(cash);
            updateInfo();
            error = true;
        }

        if (error) {
            await Swal.fire({
                title: 'Ready to proceed?',
                text: 'Click OK to continue to California',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#0000FF'
            }).then(() => {
                window.location.href='../textScreens/californiaText.html'
            });
        } else {
            await Swal.fire({
                title: 'Congratulations',
                text: 'You were one of the lucky few who made it across America without any problems :D',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#0000FF'
            }).then(() => {
                window.location.href='../textScreens/californiaText.html'
            });
        }
    }
}

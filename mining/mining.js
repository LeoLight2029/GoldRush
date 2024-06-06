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
function checkHearts() {
    let hearts = parseInt(localStorage.getItem('heart'), 10) || 0;
    let cash = parseInt(localStorage.getItem('cash'),10 || 0)
    if (hearts <= 0 || cash <=0) {
        window.location.href = '../deathScreen/death.html'; 
    }
}

setInterval(checkHearts, 1000);

function nextPage(){
    localStorage.setItem('day', 1)
    window.location.href='../textScreens/day1text.html'
}
function SN(){
    Swal.fire({
        title: 'Sierra Nevada',
        text: "The Sierra Nevada was the site of the first major gold discovery in California at Sutter's Mill in 1848, sparking the California Gold Rush. You may find more gold here, but it is very low quality. Do you wish to continue?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0000FF',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Continue'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.setItem('location', 'Sierra Nevada')
            nextPage();
        }
    });
}
function KM(){
    Swal.fire({
        title: 'Klamath Mountains',
        text: "The Klamath Mountains' Trinity River area became one of the richest gold mining regions during the Gold Rush, with some miners extracting gold worth millions in today's dollars. Do you wish to continue?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0000FF',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Continue'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.setItem('location', 'Klamath Mountains')
            nextPage();
        }
    });
}
function MD(){
    Swal.fire({
        title: 'Mojave Desert',
        text: "Despite its harsh environment, the Mojave Desert became home to the boomtown of Calico in the 1880s, which produced over $20 million in silver ore alongside gold mining operations. Gold is very valuable, but hard to come by here. Do you wish to continue?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0000FF',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Continue'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.setItem('location', 'Mojave Desert')
            nextPage();
        }
    });
}
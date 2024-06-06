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
let miningLocation = localStorage.getItem('location')

if(localStorage.getItem('day')==='1'){
    document.getElementById('method1').classList.remove('hidden')
    document.getElementById('method1').textContent='Gold Panning'
}
if(localStorage.getItem('day')==='2'){
    document.getElementById('method1').classList.remove('hidden')
    document.getElementById('method1').textContent='Gold Panning'

    if(miningLocation==='Klamath Mountains'){
        document.getElementById('method2').classList.remove('hidden')
        document.getElementById('method2').textContent='Hydraulic Mining'
    }else if(miningLocation==='Sierra Nevada'){
        document.getElementById('method2').classList.remove('hidden')
        document.getElementById('method2').textContent='Rocker Cradle'
    }else{
        document.getElementById('method2').classList.remove('hidden')
        document.getElementById('method2').textContent='Dredging'
    }
}
if(localStorage.getItem('day')==='3'){
    document.getElementById('method1').classList.remove('hidden')
    document.getElementById('method1').textContent='Gold Panning'

    if(miningLocation==='Klamath Mountains'){
        document.getElementById('method2').classList.remove('hidden')
        document.getElementById('method2').textContent='Hydraulic Mining'
        document.getElementById('method3').classList.remove('hidden')
        document.getElementById('method3').textContent='Underground Hardrock Mining'
    }else if(miningLocation==='Sierra Nevada'){
        document.getElementById('method2').classList.remove('hidden')
        document.getElementById('method2').textContent='Rocker Cradle'
        document.getElementById('method3').classList.remove('hidden')
        document.getElementById('method3').textContent='Hydraulic Mining'
    }else{
        document.getElementById('method2').classList.remove('hidden')
        document.getElementById('method2').textContent='Dredging'
        document.getElementById('method3').classList.remove('hidden')
        document.getElementById('method3').textContent='Open Pit Mining'
    }
}
function method1(){
    Swal.fire({
        title: 'Panning',
        text: "Gold panning, a simple method to extract gold from river sediments, involves swirling water in a shallow pan to separate gold from sand and gravel. This technique, a staple of the California Gold Rush of the 1850s, remains popular among modern gold enthusiasts. For the game, click on all the gold pieces you can find as fast as possible!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0000FF',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Continue'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.setItem('miningType', 'panning')
            window.location.href='../miningGames/panning.html'
        }
    });
}

function method2(){
    if (miningLocation==='Klamath Mountains'){
        Swal.fire({
            title: 'Hydraulic Mining',
            text: "Hydraulic mining, a technique developed during the California Gold Rush, involves using high-pressure jets of water to erode gravel hillsides and extract gold. This method significantly increased gold production but caused severe environmental damage, leading to its regulation in the late 19th century. In the game you will have to click a section of the cliff, and there is a chance you will strike gold!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0000FF',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Continue'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem('miningType', 'panning')
                window.location.href='../miningGames/hydraulicMining.html'
            }
        });
    }else if(miningLocation === 'Sierra Nevada'){
        Swal.fire({
            title: 'Rocker Cradle',
            text: "Rocker cradle mining, also known as a rocker box or cradle, is a manual gold mining method popular during the California Gold Rush. Miners rocked the cradle back and forth, allowing water and gravity to separate gold from gravel. This technique was simpler and more portable than other methods, making it accessible to individual prospectors seeking fortune. In this game, you will be rocking a rocker cradle, and there is a chance you find gold each time!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0000FF',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Continue'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem('miningType', 'panning')
                window.location.href='../miningGames/rockerCradle.html'
            }
        });
    }else{
        Swal.fire({
            title: 'Dredging',
            text: "Dredging, a mechanical method of gold mining, involves using a floating dredge to extract gold from riverbeds and streams. The dredge scoops up sediment from underwater, processes it onboard, and separates gold particles from other materials. This method revolutionized gold mining efficiency during the late 19th and early 20th centuries. In the game you will have to click a section of the river, and there is a chance you will strike gold!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0000FF',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Continue'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem('miningType', 'panning')
                window.location.href='../miningGames/dredging.html'
            }
        });
    }
}

function method3(){
    if (miningLocation==='Klamath Mountains'){
        Swal.fire({
            title: 'Underground Hardrock Mining',
            text: "Underground hardrock mining involves extracting gold from deep underground veins embedded in solid rock. Miners use tunnels and shafts to access the ore, which is then crushed and processed to extract the gold. This method requires significant infrastructure and expertise, often leading to the development of mining towns and communities around the mines. You will have to move your character around the underground cave to collect the gold as fast as possible. You will use your arrow keys to move!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0000FF',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Continue'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem('miningType', 'panning')
                window.location.href='../miningGames/hardRock.html'
            }
        });
    }else if(miningLocation === 'Sierra Nevada'){
        Swal.fire({
            title: 'Hydraulic Mining',
            text: "Hydraulic mining, a technique developed during the California Gold Rush, involves using high-pressure jets of water to erode gravel hillsides and extract gold. This method significantly increased gold production but caused severe environmental damage, leading to its regulation in the late 19th century. In the game you will have to click a section of the cliff, and there is a chance you will strike gold!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0000FF',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Continue'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem('miningType', 'panning')
                window.location.href='../miningGames/hydraulicMining.html'
            }
        });
    }else{
        Swal.fire({
            title: 'Open Pit Mining',
            text: "Open pit mining, a large-scale method for extracting gold, involves digging a massive pit in the earth's surface to access gold-bearing ore. This method is efficient for extracting gold from shallow deposits but can result in extensive environmental impact and landscape alteration. The Super Pit in Western Australia is one of the world's largest open-pit gold mines, reaching depths of over 600 meters. You will have to move your character around the open pit to collect the gold as fast as possible. You will use your arrow keys to move!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0000FF',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Continue'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem('miningType', 'panning')
                window.location.href='../miningGames/openPit.html'
            }
        });
    }
}

function checkHearts() {
    let hearts = parseInt(localStorage.getItem('heart'), 10) || 0;
    let cash = parseInt(localStorage.getItem('cash'),10 || 0)
    if (hearts <= 0 || cash <=0) {
        window.location.href = '../deathScreen/death.html'; 
    }
}

setInterval(checkHearts, 1000);

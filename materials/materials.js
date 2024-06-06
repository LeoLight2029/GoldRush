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

function setHeart(number){
localStorage.setItem('heart', number)
}
function setCash(number){
localStorage.setItem('cash', number)
}

function nextPage(){
    window.location.href='../mining/mining.html'
}
let seller;
let tools; 
let sellerBoolean=false
let toolBoolean=false

function sell1(){
    document.getElementById('seller1').classList.add('selected')
    document.getElementById('seller2').classList.remove('selected')
    document.getElementById('seller3').classList.remove('selected')
    seller=1
    sellerBoolean=true
    document.getElementById('new').textContent='New Bundle $100'
    document.getElementById('used').textContent='Used Bundle $85'
}
function sell2(){
    document.getElementById('seller1').classList.remove('selected')
    document.getElementById('seller2').classList.add('selected')
    document.getElementById('seller3').classList.remove('selected')
    seller=2
    sellerBoolean=true
    document.getElementById('new').textContent='New Bundle $75'
    document.getElementById('used').textContent='Used Bundle $60'
}
function sell3(){
    document.getElementById('seller1').classList.remove('selected')
    document.getElementById('seller2').classList.remove('selected')
    document.getElementById('seller3').classList.add('selected')
    seller=3
    sellerBoolean=true
    document.getElementById('new').textContent='New Bundle $50'
    document.getElementById('used').textContent='Used Bundle $25'
}
document.getElementById('new').onclick = function(){
    document.getElementById('new').classList.add('selected')
    document.getElementById('used').classList.remove('selected')
    tools = 1
    toolBoolean =true
}
document.getElementById('used').onclick = function(){
    document.getElementById('new').classList.remove('selected')
    document.getElementById('used').classList.add('selected')
    tools = 2
    toolBoolean =true
}

function confirmPurchase() {
    if(sellerBoolean===false || toolBoolean===false){
        Swal.fire({
            title: 'Incomplete Purchase',
            text: 'Please select a seller and tool set',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor:'#0000FF'
          });
    }else {
        Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to confirm your purchase?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0000FF',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Continue'
    }).then((result) => {
        if (result.isConfirmed) {
            confirm();
        }
    });
}
}

function confirm(){
    let random = Math.floor(Math.random()*100)
    console.log(random)
    if (seller ===1){
        if(tools===1){
            cash-=100
            setCash(cash)
            updateInfo();
            Swal.fire({
                title: 'Very Nice Tools',
                text: 'You got a brand new and complete set of tools!',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor:'#0000FF'
              }).then(nextPage);
        }else{
            if(random<=10){
                cash-=110
                setCash(cash)
                updateInfo()
                Swal.fire({
                    title: 'Missing Tools',
                    text: 'You are missing a pickaxe, so you had to buy a new one for 25$',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor:'#0000FF'
                  }).then(nextPage);
            }else{
                cash-=85
                setCash(cash)
                updateInfo()
                Swal.fire({
                    title: 'Very Nice Tools',
                    text: 'You got a brand new and complete set of tools!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor:'#0000FF'
                  }).then(nextPage);
            }
        }
    } else if (seller===2){
        if(tools===1){
            if(random<=25){
                cash-=150
                setCash(cash)
                updateInfo()
                Swal.fire({
                    title: 'Missing Tools',
                    text: 'You are missing a pickaxe, so you had to buy a new one for 75$',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor:'#0000FF'
                  }).then(nextPage);
            }else{
                cash-=75
                setCash(cash)
                updateInfo()
                Swal.fire({
                    title: 'Very Nice Tools',
                    text: 'You got a brand new and complete set of tools!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor:'#0000FF'
                  }).then(nextPage);
            }
        }else{
            if(random<=50){
                cash-=165
                setCash(cash)
                updateInfo()
                Swal.fire({
                    title: 'Missing Tools',
                    text: 'You are missing a pickaxe, so you had to buy a new one for 105$',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor:'#0000FF'
                  }).then(nextPage);
            }else{
                cash-=60
                setCash(cash)
                updateInfo()
                Swal.fire({
                    title: 'Very Nice Tools',
                    text: 'You got a brand new and complete set of tools!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor:'#0000FF'
                  }).then(nextPage);
            }
        }
    }else {
        if(tools===1){
            if(random<=75){
                cash-=175
                setCash(cash)
                updateInfo()
                Swal.fire({
                    title: 'Missing Tools',
                    text: 'You are missing a pickaxe, so you had to buy a new one for 125$',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor:'#0000FF'
                  }).then(nextPage);
            }else{
                cash-=50
                setCash(cash)
                updateInfo()
                Swal.fire({
                    title: 'Very Nice Tools',
                    text: 'You got a brand new and complete set of tools!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor:'#0000FF'
                  }).then(nextPage);
            }
        }else{
            if(random<=90){
                cash-=200
                setCash(cash)
                updateInfo()
                Swal.fire({
                    title: 'Missing Tools',
                    text: 'You are missing a pickaxe, so you had to buy a new one for 175$',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor:'#0000FF'
                  }).then(nextPage);
            }else{
                cash-=25
                setCash(cash)
                updateInfo()
                Swal.fire({
                    title: 'Very Nice Tools',
                    text: 'You got a brand new and complete set of tools!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor:'#0000FF'
                  }).then(nextPage);
            }
        }
    }
}
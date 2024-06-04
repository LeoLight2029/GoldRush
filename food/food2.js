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
    window.location.href='../materials/materials.html'
}

let store = localStorage.getItem('store')

if(store === 'farm'){
    document.getElementById('store1').textContent = 'Manor Farm'
    document.getElementById('store2').textContent = 'Napoleon\'s Farm'
}
if(store === 'market'){
    document.getElementById('store1').textContent = 'Walmart but 1850s'
    document.getElementById('store2').textContent = 'UCTECH Supermarket'
}
function store1(){
    for (i=1; i<5; i++){
        document.getElementById(`food${i}`).classList.remove('hidden')
    }
    document.getElementById('store1').classList.add('selected')
    document.getElementById('store2').classList.remove('selected')
    if (store==='market'){
        document.getElementById('food1').textContent='Molasses $20'
        document.getElementById('food2').textContent='Licorice $20'
        document.getElementById('food3').textContent='Jams $20'
        document.getElementById('food4').textContent='Oats $20'
    }else{
        document.getElementById('food1').textContent='Potatos $15'
        document.getElementById('food2').textContent='Corn $15'
        document.getElementById('food3').textContent='Bacon $15'
        document.getElementById('food4').textContent='Eggs $15'
    }
}
function store2(){
    for (i=1; i<5; i++){
        document.getElementById(`food${i}`).classList.remove('hidden')
    }
    document.getElementById('store2').classList.add('selected')
    document.getElementById('store1').classList.remove('selected')
    if (store==='market'){
        document.getElementById('food1').textContent='Honey $10'
        document.getElementById('food2').textContent='Cookies $10'
        document.getElementById('food3').textContent='Jellies $10'
        document.getElementById('food4').textContent='Coffee $10'
    }else{
        document.getElementById('food1').textContent='Milk $5'
        document.getElementById('food2').textContent='Cheese $5'
        document.getElementById('food3').textContent='Pies $5'
        document.getElementById('food4').textContent='Bread $5'
    }
}
function food(){
    let random = Math.floor(Math.random()*100)
    if(store==='market' && document.getElementById('store1').classList.contains('selected')){
        cash-=20
        setCash(cash)
        heart+=1
        setHeart(heart)
        updateInfo()
        Swal.fire({
            title: 'Yippe',
            text: 'You chose very healthy food and gained a heart',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor:'#0000FF'
          }).then(nextPage);
    }else if(store==='market' && document.getElementById('store2').classList.contains('selected')){
        cash-=10
        setCash(cash)
        if(random<=25){
            heart-=1
            setHeart(heart)
            updateInfo()
            Swal.fire({
                title: 'Food Poisoning',
                text: 'You unforunately chose unhealthy food and got GERD. You lost one heart',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor:'#0000FF'
            }).then(nextPage);
        }else{
            heart+=1
            setHeart(heart)
            updateInfo()
            Swal.fire({
                title: 'Yippe',
                text: 'You chose very healthy food and gained a heart',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor:'#0000FF'
              }).then(nextPage);
        }
    }else if(store==='farm' && document.getElementById('store1').classList.contains('selected')){
        if(random<=10){
            heart-=1
            setHeart(heart)
            updateInfo()
            Swal.fire({
                title: 'Food Poisoning',
                text: 'You unforunately chose unhealthy food and got GERD. You lost one heart',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor:'#0000FF'
            }).then(nextPage);
        }else{
            heart+=1
            setHeart(heart)
            updateInfo()
            Swal.fire({
                title: 'Yippe',
                text: 'You chose very healthy food and gained a heart',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor:'#0000FF'
              }).then(nextPage);
        }
    }else{
        if(random<=50){
            heart-=1
            setHeart(heart)
            updateInfo()
            Swal.fire({
                title: 'Food Poisoning',
                text: 'You unforunately chose unhealthy food and got GERD. You lost one heart',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor:'#0000FF'
            }).then(nextPage);
        }else{
            heart+=1
            setHeart(heart)
            updateInfo()
            Swal.fire({
                title: 'Yippe',
                text: 'You chose very healthy food and gained a heart',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor:'#0000FF'
              }).then(nextPage);
        }
    }
}
document.getElementById('info').textContent=`Hearts: ${localStorage.getItem('heart')} Cash: $${localStorage.getItem('cash')}`

let cash = parseInt(localStorage.getItem('cash'),10)
let heart = parseInt(localStorage.getItem('heart'), 10)
function first(){
    localStorage.setItem('cash', cash-=100)
    localStorage.setItem('class', 'first')
    document.getElementById('info').textContent=`Hearts: ${localStorage.getItem('heart')} Cash: $${localStorage.getItem('cash')}`
    document.getElementById('container').classList.add('hidden')
    document.getElementById('foods').classList.replace('hidden', 'container')
}
function second(){
    localStorage.setItem('cash', cash-=50)
    localStorage.setItem('class', 'second')
    document.getElementById('info').textContent=`Hearts: ${localStorage.getItem('heart')} Cash: $${localStorage.getItem('cash')}`
    document.getElementById('container').classList.add('hidden')
    document.getElementById('foods').classList.replace('hidden', 'container')
}
function third(){
    localStorage.setItem('cash', cash-=10)
    localStorage.setItem('class', 'third')
    document.getElementById('info').textContent=`Hearts: ${localStorage.getItem('heart')} Cash: $${localStorage.getItem('cash')}`
    document.getElementById('container').classList.add('hidden')
    document.getElementById('foods').classList.replace('hidden', 'container')
}
function food(){
    let random= Math.floor(Math.random()*4)
    console.log(random)
    if(localStorage.getItem('class') === 'first'){
        Swal.fire({
            title: 'You chose wisely',
            text: 'You ate a luxurious meal and gained a heart, but at what cost...',
            icon: "success",
            confirmButtonText: 'OK',
            confirmButtonColor:'#0000FF'
          });
        localStorage.setItem('heart', heart+=1)
        document.getElementById('info').textContent=`Hearts: ${localStorage.getItem('heart')} Cash: $${localStorage.getItem('cash')}`
    } else if(localStorage.getItem('class') === 'second' && random<=1){
        Swal.fire({
            title: 'Food Poisoning',
            text: 'You have lost a heart',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor:'#0000FF'
          });
        localStorage.setItem('heart', heart-=1)
        document.getElementById('info').textContent=`Hearts: ${localStorage.getItem('heart')} Cash: $${localStorage.getItem('cash')}`
    } else if(localStorage.getItem('class') === 'third' && random!=2){
        Swal.fire({
            title: 'Food Poisoning',
            text: 'You have lost a heart',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor:'#0000FF'
          });
        localStorage.setItem('heart', heart-=1)
        document.getElementById('info').textContent=`Hearts: ${localStorage.getItem('heart')} Cash: $${localStorage.getItem('cash')}`
    }else {
        Swal.fire({
            title: 'You Got Lucky',
            text: 'You found uncontaminated food and gained a heart',
            icon: "success",
            confirmButtonText: 'OK',
            confirmButtonColor:'#0000FF'
          });
        localStorage.setItem('heart', heart+=1)
        document.getElementById('info').textContent=`Hearts: ${localStorage.getItem('heart')} Cash: $${localStorage.getItem('cash')}`
    }
    document.querySelectorAll('.food-button').forEach(button => {
        button.disabled = true;
    });
    setTimeout(nextPage, 3000)
}   

function nextPage(){
    if(localStorage.getItem('class') === 'first' || localStorage.getItem('class') === 'second'){
        window.location.href='../textScreens/gamblingText.html'
    }else{
        window.location.href='../transportProblem/problem.html'
    }
}
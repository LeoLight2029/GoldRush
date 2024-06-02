let race = localStorage.getItem('race')

if(race === "White"){
    document.getElementById('ship').disabled = true;
    document.getElementById('ship').classList.add('hidden')
}else if(race === "Chinese"){
    document.getElementById('train').disabled=true;
    document.getElementById('train').classList.add('hidden')
    document.getElementById('wagon').disabled=true;
    document.getElementById('wagon').classList.add('hidden')
}else{

}

function train(){
    localStorage.setItem('transportation', 'train')
    document.getElementById('ship').disabled=true;
    document.getElementById('wagon').disabled=true;
    document.getElementById('train').disabled=true;
    window.location.href='MOT/trainShip.html'
}
function wagon(){
    localStorage.setItem('transportation', 'wagon')
    document.getElementsByClassName('button').disabled=true;
    document.getElementById('ship').disabled=true;
    document.getElementById('wagon').disabled=true;
    document.getElementById('train').disabled=true;
    window.location.href='MOT/wagon.html'
}
function ship(){
    localStorage.setItem('transportation', 'ship')
    document.getElementsByClassName('button').disabled=true;
    document.getElementById('ship').disabled=true;
    document.getElementById('wagon').disabled=true;
    document.getElementById('train').disabled=true;
    window.location.href='MOT/trainShip.html'
}
document.getElementById('info').textContent=`Hearts: ${localStorage.getItem('heart')} Cash: ${localStorage.getItem('cash')}`

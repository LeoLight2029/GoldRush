function race(){
    let chance = Math.floor(Math.random()*100);
    let text = document.getElementById('text');

    function nextPage(){
        window.location.href = '../textScreens/transportText.html';
    }

    let raceResult;

    if(chance <= 33){
        text.textContent = 'You are WHITE';
        raceResult = 'White';
    } else if(chance > 33 && chance <= 66){
        text.textContent = 'You are CHINESE';
        raceResult = 'Chinese';
    } else {
        text.textContent = 'You are LATIN AMERICAN';
        raceResult = 'Latin American';
    }

    localStorage.setItem('race', raceResult);

    document.getElementById('button').disabled=true;

    localStorage.setItem('heart', 5);
    localStorage.setItem('cash', '?')
    setTimeout(nextPage, 2000);
}

setInterval(checkHearts, 1000);
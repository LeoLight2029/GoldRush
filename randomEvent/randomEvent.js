updateInfo()

let cash = parseInt(localStorage.getItem('cash'),10)
let heart = parseInt(localStorage.getItem('heart'), 10)

function updateInfo() {
    document.getElementById('info').textContent = `Hearts: ${localStorage.getItem('heart') || 0} Cash: $${localStorage.getItem('cash') || 0}`;
}

function setHeart(number) {
    localStorage.setItem('heart', number);
}

function setCash(number) {
    localStorage.setItem('cash', number);
}

let retrievedArrayString = localStorage.getItem('doneScenarios');
let retrievedArray = retrievedArrayString ? JSON.parse(retrievedArrayString) : [];

function generateUniqueRandomNumber() {
    let possibleNumbers = Array.from({ length: 15 }, (_, i) => i + 1);
    let availableNumbers = possibleNumbers.filter(num => !retrievedArray.includes(num));
    if (availableNumbers.length === 0) return null;
    let randomIndex = Math.floor(Math.random() * availableNumbers.length);
    return availableNumbers[randomIndex];
}

let random = generateUniqueRandomNumber();

function scenarios() {
    switch(random) {
        case 1:
            document.getElementById('text').textContent = "Random Event: Rival prospectors try to take over your claim. You were able to secure your gold by fighting them off, but you lost 1 heart in the process.";
            heart -= 1;
            setHeart(heart);
            break;
        case 2:
            document.getElementById('text').textContent = "Random Event: Heavy rain floods your mine and you get hurt. You lose 1 heart.";
            heart -= 1;
            setHeart(heart);
            break;
        case 3:
            document.getElementById('text').textContent = "Random Event: Bandits raid your camp in the middle of the night. You didn't notice them while you were asleep but you lost $30.";
            cash -= 30;
            setCash(cash);
            break;
        case 4:
            document.getElementById('text').textContent = "Random Event: Midway through mining, your equipment broke and you have to buy new ones. New tools costs you $25.";
            cash -= 25;
            setCash(cash);
            break;
        case 5:
            document.getElementById('text').textContent = "Random Event: While you were inside a cave, the tunnel collapses and you lose another heart.";
            heart -= 1;
            setHeart(heart);
            break;
        case 6:
            document.getElementById('text').textContent = "Random Event: An outbreak of cholera makes you sick. The sickness makes you lose 1 heart.";
            heart -= 1;
            setHeart(heart);
            break;
        case 7:
            document.getElementById('text').textContent = "Random Event: You meet up with Native Americans and you were able to negotiate a successful trade. You were able to make $50 from trading.";
            cash += 50;
            setCash(cash);
            break;
        case 8:
            document.getElementById('text').textContent = "Random Event: You realized some of the gold you found was fool's gold (pyrite). You lost $50.";
            cash -= 50;
            setCash(cash);
            break;
        case 9:
            document.getElementById('text').textContent = "Random Event: You got lost on your way back and had to wait until someone found you.";
            break;
        case 10:
            document.getElementById('text').textContent = "Random Event: Stampede of Animals run through your camp. You lost 1 heart.";
            heart -= 1;
            setHeart(heart);
            break;
        case 11:
            document.getElementById('text').textContent = "Random Event: A severe drought makes everyone dehydrated. You lost 1 heart.";
            heart -= 1;
            setHeart(heart);
            break;
        case 12:
            document.getElementById('text').textContent = "Random Event: Dangerous cliffs and unstable ground makes you slip and hurt yourself. You lose one heart.";
            heart -= 1;
            setHeart(heart);
            break;
        case 13:
            document.getElementById('text').textContent = "Random Event: Bounty Hunters mistake you for a criminal. You lose $50.";
            cash -= 50;
            setCash(cash);
            break;
        case 14:
            document.getElementById('text').textContent = "Random Event: A mountain lion attacks your camp. You lose 1 heart.";
            heart -= 1;
            setHeart(heart);
            break;
        case 15:
            document.getElementById('text').textContent = "Random Event: You find a hidden secret stash of money. You get $100.";
            cash += 100;
            setCash(cash);
            break;
        default:
            document.getElementById('text').textContent = "Unknown scenario.";
            break;
    }
    updateInfo();
}

function next() {
    retrievedArray.push(random);
    localStorage.setItem('doneScenarios', JSON.stringify(retrievedArray));
    let day =localStorage.getItem('day')
    if(day==='1'){
        window.location.href='../textScreens/day2text.html'
    }else if(day==='2'){
        window.location.href='../textScreens/day3text.html'
    }else{
        window.location.href='../endScreen/endscreen.html'
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

updateInfo();
if (random !== null) {
    scenarios();
} else {
    document.getElementById('text').textContent = "All scenarios completed!";
    document.getElementById('nextButton').disabled = true;
}
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
    window.location.href='problem2.html'
}
function generateRandomNumber() {
    return Math.floor(Math.random() * 4) + 1;
}
let numberGenerated = generateRandomNumber()
localStorage.setItem('number', numberGenerated)

let MOT = localStorage.getItem('transportation')
let race = localStorage.getItem('race')

let scenario = document.getElementById('scenario')
let button1 = document.getElementById('choice1')
let button2 = document.getElementById('choice2')
let button3 = document.getElementById('choice3')
let button4 = document.getElementById('choice4')

function option1() {
    if (MOT === 'ship' && race === 'Chinese') {
        if (numberGenerated === 1) {
            cash-=50
            setCash(cash)
            updateInfo();
            Swal.fire({
                title: 'Translator Hired',
                text: 'You hired and translator and communcation has improved significantly',
                icon: 'success'
            }).then(nextPage);
        } else if (numberGenerated === 2) {
            heart+=1
            setHeart(heart)
            updateInfo();
            Swal.fire({
                title: 'Support Found',
                text: 'You find support and safety in numbers. You gained a heart!',
                icon: 'success'
            }).then(nextPage);
        } else if (numberGenerated === 3) {
            Swal.fire({
                title: 'Legal Advice',
                text: 'Seeking legal advice prepares you well for the process. You leave unscathed',
                icon: 'success'
            }).then(nextPage);
        } else {
            Swal.fire({
                title: 'Belongings Secured',
                text: 'Securing belongings keeps you and your items safe. You leave with all your belongings.',
                icon: 'success'
            }).then(nextPage);
        }
    } else if (MOT === 'ship' && race === 'Latin American') {
        if (numberGenerated === 1) {
            Swal.fire({
                title: 'Navigator',
                text: 'A reliable navigator ensures you find your way.',
                icon: 'success'
            }).then(nextPage);
        } else if (numberGenerated === 2) {
            Swal.fire({
                title: 'Protected Route',
                text: 'Traveling with protection keeps you safe.',
                icon: 'success'
            }).then(nextPage);
        } else if (numberGenerated === 3) {
            Swal.fire({
                title: 'Hygiene Maintained',
                text: 'Maintaining hygiene helps you avoid the disease.',
                icon: 'success'
            }).then(nextPage);
        } else {
            Swal.fire({
                title: 'Regular Maintenance',
                text: 'Regular maintenance keeps the ship running smoothly.',
                icon: 'success'
            }).then(nextPage);
        }
    }
}

function option2() {
    if (MOT === 'ship' && race === 'Chinese') {
        if (numberGenerated === 1) {
            heart-=1
            setHeart(heart)
            updateInfo();
            Swal.fire({
                title: 'Body Language',
                text: 'People misinterpret what you mean and you get yourself into a fight. You lost one heart',
                icon: 'error'
            }).then(nextPage);
        } else if (numberGenerated === 2) {
            heart-=1
            cash-=25
            setHeart(heart)
            setCash(cash)
            updateInfo()
            Swal.fire({
                title: 'Conflict',
                text: 'Confronting others leads to a conflict, where you lost a heart and got robbed $25',
                icon: 'error'
            }).then(() => {
                nextPage();
            });
        } else if (numberGenerated === 3) {
            cash-=50
            setCash(cash)
            updateInfo()
            Swal.fire({
                title: 'Ignored Restrictions',
                text: 'Ignoring restrictions results in trouble at the border. You had to give up $50',
                icon: 'error'
            }).then(() => {
                nextPage();
            });
        } else {
            heart-=1
            setHeart(heart)
            updateInfo();
            Swal.fire({
                title: 'Panic',
                text: 'Panicking leads to injury. You lost one heart',
                icon: 'error'
            }).then(() => {
                nextPage();
            });
        }
    } else if (MOT === 'ship' && race === 'Latin American') {
        if (numberGenerated === 1) {
            heart-=1
            setHeart(heart)
            updateInfo();
            Swal.fire({
                title: 'Outdated Maps',
                text: 'Using outdated maps led your ship to the wrong part of America. You lose one heart.',
                icon: 'error'
            }).then(() => {
                nextPage();
            });
        } else if (numberGenerated === 2) {
            heart-=1
            setHeart(heart)
            updateInfo();
            Swal.fire({
                title: 'Pirate Danger',
                text: 'Sailing through pirate areas puts you in danger. You didn\'t encounter any but you got so afraid you peed yor pants. You lost one heart',
                icon: 'error'
            }).then(() => {
                nextPage();
            });
        } else if (numberGenerated === 3) {
            heart-=1
            setHeart(heart)
            updateInfo();
            Swal.fire({
                title: 'Health Problems',
                text: 'It turns out you very serious health problems, and lost one heart',
                icon: 'error'
            }).then(() => {
                nextPage();
            });
        } else {
            heart-=1
            setHeart(heart)
            updateInfo();
            Swal.fire({
                title: 'Overlooked Issues',
                text: 'Overlooking mechanical issues leads to the boat to explode. However the boat is still somehow functional, and you only lost one heart',
                icon: 'error'
            }).then(() => {
                nextPage();
            });
        }
    }
}

function option3() {
    if (MOT === 'ship' && race === 'Chinese') {
        if (numberGenerated === 1) {
            cash-=50
            setCash(cash)
            updateInfo();
            Swal.fire({
                title: 'Limited Help',
                text: 'Your friends turn out to not know English at all and got you into more trouble. You lost $50 after someone decided to rob you because of it',
                icon: 'error'
            }).then(nextPage);
        } else if (numberGenerated === 2) {
            heart-=1
            setHeart(heart)
            updateInfo();
            Swal.fire({
                title: 'Isolation',
                text: 'Isolation keeps you safe but leaves you uninformed and lonely. You lose one heart out of pure depression',
                icon: 'error'
            }).then(nextPage);
        } else if (numberGenerated === 3) {
            cash-=100
            setCash(cash)
            updateInfo();
            Swal.fire({
                title: 'Legal Trouble',
                text: 'The police decide to let you go easy, however you had to pay them $100',
                icon: 'error'
            }).then(() => {
                nextPage();
            });
        } else {
            heart-=1
            setHeart(heart)
            updateInfo();
            Swal.fire({
                title: 'Accidents',
                text: 'Disregarding instructions results in severe diarrhea. You lose one heart after not getting to the toilet in time.',
                icon: 'error'
            }).then(() => {
                nextPage();
            });
        }
    } else if (MOT === 'ship' && race === 'Latin American') {
        if (numberGenerated === 1) {
            heart-=1
            setHeart(heart)
            updateInfo();
            Swal.fire({
                title: 'Instinct',
                text: 'Going by instinct gets you even more lost. You lost one heart',
                icon: 'error'
            }).then(() => {
                nextPage();
            });
        } else if (numberGenerated === 2) {
            cash-=50
            heart-=1
            setCash(cash)
            setHeart(heart)
            updateInfo()
            Swal.fire({
                title: 'Pirate Negotiation',
                text: 'The pirates completely ignored you. You were attacked and robbed. You lost one heart and $50',
                icon: 'error'
            }).then(() => {
                nextPage();
            });
        } else if (numberGenerated === 3) {
            heart-=2
            setHeart(heart)
            updateInfo()
            Swal.fire({
                title: 'Contamination',
                text: 'Eating dirty food made you sick (shocker). You lost two hearts',
                icon: 'error'
            }).then(() => {
                nextPage();
            });
        } else {
            cash-=50
            heart-=1
            setCash(cash)
            setHeart(heart)
            updateInfo()
            Swal.fire({
                title: 'Failed Repairs',
                text: 'You accidentally confused the front of the boat with the back and broke everything. You lost one heart out of frustration and $50 to repair it.',
                icon: 'error'
            }).then(() => {
                nextPage();
            });
        }
    }
}

function option4() {
    if (MOT === 'ship' && race === 'Chinese') {
        if (numberGenerated === 1) {
            heart-=1
            setHeart(heart)
            updateInfo()
            Swal.fire({
                title: 'Lonely',
                text: 'You isolated yourself and was lonely. You lost one heart after being too depressed',
                icon: 'error'
            }).then(nextPage);
        } else if (numberGenerated === 2) {
            cash-=50
            heart-=1
            setCash(cash)
            setHeart(heart)
            updateInfo()
            Swal.fire({
                title: 'Bribery',
                text: 'The bribing doesn\'t work, and they beat you up for it too. You lost the money you tried bribing them with and a heart',
                icon: 'error'
            }).then(nextPage);
        } else if (numberGenerated === 3) {
            heart-=1
            setHeart(heart)
            updateInfo()
            Swal.fire({
                title: 'Legal Confusion',
                text: 'Misunderstanding laws causes delays and confusion. You lost a heart after waiting for so long.',
                icon: 'error'
            }).then(nextPage);
        } else {
            heart-=2
            setHeart(heart)
            updateInfo()
            Swal.fire({
                title: 'Dangerous Attempt',
                text: 'Your attempt did not work. You lost 2 hearts',
                icon: 'error'
            }).then(() => {
                nextPage();
            });
        }
    } else if (MOT === 'ship' && race === 'Latin American') {
        if (numberGenerated === 1) {
            heart-=1
            setHeart(heart)
            updateInfo()
            Swal.fire({
                title: 'Lost',
                text: 'Your ship got lost. You lost a heart trying to find your way back',
                icon: 'error'
            }).then(() => {
                nextPage();
            });
        } else if (numberGenerated === 2) {
            heart-=2
            setHeart(heart)
            updateInfo()
            Swal.fire({
                title: 'Resistance',
                text: 'Pirates are extremely dangerous and beat you up. You lost 2 hearts',
                icon: 'error'
            }).then(() => {
                nextPage();
            });
        } else if (numberGenerated === 3) {
            heart-=1
            setHeart(heart)
            updateInfo()
            Swal.fire({
                title: 'Outbreak',
                text: 'Avoiding reporting illnesses causes an outbreak. You contract the virus and lost one heart',
                icon: 'error'
            }).then(() => {
                nextPage();
            });
        } else {
            cash-=50
            setCash(cash)
            updateInfo();
            Swal.fire({
                title: 'Mechanical Failure',
                text: 'Ignoring advice leads to serious mechanical failure. You lost $50',
                icon: 'error'
            }).then(() => {
                nextPage();
            });
        }
    }
}

if(MOT === 'ship' && race === 'Chinese'){
    if(numberGenerated===1){
        scenario.textContent='While on the ship, you realize your fluent Mandarin is no use, and you have no means of communcation. What do you do?';
        button1.textContent='Hire a translator ($50)';
        button2.textContent='Try to use body language to communicate';
        button3.textContent='Rely on other Chinese members who speak little English';
        button4.textContent='Refuse to interact with anyone';
    }else if(numberGenerated===2){
        scenario.textContent='You realize people on the ship are treating you differently due to your race. What do you do?';
        button1.textContent='Form a group with other Chinese people';
        button2.textContent='Confront the other people';
        button3.textContent='Isolate yourself';
        button4.textContent='Attempt to bribe the other people to avoid discrimination ($50)';
    }else if(numberGenerated===3){
        scenario.textContent='As you are approaching the US border, you realize that you have no idea what the process and laws will be like. What do you do?';
        button1.textContent='Seek legal advice from friends';
        button2.textContent='Ignore the legal restrictions and hope for the best';
        button3.textContent='Engage in illegal activities to bypass restrictions';
        button4.textContent='Misunderstand the laws due to language barriers';
    }else{
        scenario.textContent='While at sea, the ship sways nonstop and you feel extremely sick. What do you do?';
        button1.textContent='Secure belongings and stay in safe areas of the ship';
        button2.textContent='Panic and move around the ship during storms';
        button3.textContent='Disregard the crew\'s instructions';
        button4.textContent='Attempt to abandon ship in rough seas';
    }
}else if(MOT === 'ship' && race === 'Latin American'){
    if(numberGenerated===1){
        scenario.textContent='Your ship loses its way, and you realize you are lost at sea. What do you do?';
        button1.textContent='Use a reliable and experienced navigator';
        button2.textContent='Rely on outdated maps and charts';
        button3.textContent='Ignore navigation tools and go by instinct';
        button4.textContent='Split from the main route to explore';
    }else if(numberGenerated===2){
        scenario.textContent='Pirates have been spotted near your ship. What do you do?';
        button1.textContent='Travel with a convoy or protected route';
        button2.textContent='Sail through known pirate areas to save time';
        button3.textContent='Attempt to negotiate with pirates';
        button4.textContent='Resist pirates';
    }else if(numberGenerated===3){
        scenario.textContent='There is an outbreak of disease on your ship. What do you do?';
        button1.textContent='Maintain strict hygiene and follow health protocols';
        button2.textContent='Ignore signs of illness among passengers';
        button3.textContent='Use contaminated water and food';
        button4.textContent='Avoid reporting illnesses to avoid quarantine';
    }else{
        scenario.textContent='The ship has encountered mechanical failures. What do you do?';
        button1.textContent='Regularly maintain and inspect the ship\'s equipment';
        button2.textContent='Overlook small mechanical issues';
        button3.textContent='Use makeshift repairs without proper tools or parts';
        button4.textContent='Ignore crew\'s maintenance advice';
    }
}else if(MOT === 'train' && race === 'Latin American'){
    if(numberGenerated===1){
        scenario.textContent='You experience theft on the train. What do you do?';
        button1.textContent='Keep valuables secured and be vigilant';
        button2.textContent='Flaunt wealth, attracting thieves';
        button3.textContent='Trust strangers with belongings';
        button4.textContent='Leave belongings unattended';
    }else if(numberGenerated===2){
        scenario.textContent='You feel culturally isolated on the train. What do you do?';
        button1.textContent='Engage with fellow travelers and learn about their cultures';
        button2.textContent='Avoid interacting with anyone outside your own group';
        button3.textContent='Attempt to impose your own culture on others';
        button4.textContent='Refuse to adapt to any new cultural norms';
    }else if(numberGenerated===3){
        scenario.textContent='You face legal restrictions in a new region. What do you do?';
        button1.textContent='Research and follow local laws and regulations';
        button2.textContent='Assume that laws are the same as back home';
        button3.textContent='Ignore laws completely';
        button4.textContent='Misinterpret laws due to language barriers';
    }else{
        scenario.textContent='You have health concerns while traveling. What do you do?';
        button1.textContent='Carry a first aid kit and necessary medications';
        button2.textContent='Ignore minor health issues';
        button3.textContent='Use unverified local remedies';
        button4.textContent='Avoid seeking medical help due to fear of discrimination';
    }
}else{
    if(numberGenerated===1){
        scenario.textContent='The train is overcrowded. What do you do?';
        button1.textContent='Book tickets in advance to secure seating';
        button2.textContent='Board overcrowded trains for convenience';
        button3.textContent='Push and shove to get a seat';
        button4.textContent='Stand in unsafe areas';
    }else if(numberGenerated===2){
        scenario.textContent='You experience theft on the train. What do you do?';
        button1.textContent='Keep valuables hidden and stay alert';
        button2.textContent='Flash money and valuables';
        button3.textContent='Leave belongings in the open';
        button4.textContent='Trust strangers too easily';
    }else if(numberGenerated===3){
        scenario.textContent='The train has poor sanitation. What do you do?';
        button1.textContent='Carry personal hygiene supplies and use facilities properly';
        button2.textContent='Ignore sanitation facilities';
        button3.textContent='Dispose of waste improperly';
        button4.textContent='Share personal items, spreading germs';
    }else{
        scenario.textContent='The train is delayed. What do you do?';
        button1.textContent='Plan for possible delays and carry essentials';
        button2.textContent='Complain loudly about delays';
        button3.textContent='Attempt to leave the train and find alternative transport';
        button4.textContent='Ignore delay announcements and miss important updates';
    }
}
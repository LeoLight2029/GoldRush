document.addEventListener('DOMContentLoaded', (event) => {
    dialouge();
  });
function dialouge() {
    const sentences = [
        `Congratulations, you are ${localStorage.getItem('race')}`,
        "Just some more info, you guys will all start with 3 hearts",
        "However how much money you start with, will be determined by you :D",
        "The following minigame will determine this",
        "Click as fast as you can!"
    ];
    const textContainer = document.getElementById('text');
    let sentenceIndex = 0;
    const typingSpeed = 50;
    const sentencePause = 1500;
  
    function typeSentence() {
      const text = sentences[sentenceIndex];
      let charIndex = 0;
      
      function typeCharacter() {
        if (charIndex < text.length) {
          textContainer.textContent += text.charAt(charIndex);
          charIndex++;
          setTimeout(typeCharacter, typingSpeed);
        } else {
          setTimeout(() => {
            textContainer.textContent = '';
            sentenceIndex++;
            if (sentenceIndex < sentences.length) {
              setTimeout(typeSentence, sentencePause);
            } else {
              setTimeout(goToNextPage, 2000);
            }
          }, sentencePause);
        }
      }
      
      typeCharacter();
    }
    
    typeSentence();
    setTimeout(info,9000)
  }
  
  function goToNextPage() {
    window.location.href = 'moneyGame/money.html';
  }

  function info(){
    document.getElementById('info').textContent=`Hearts: ${localStorage.getItem('heart')} Cash: ${localStorage.getItem('cash')}`
  }

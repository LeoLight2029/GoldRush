document.addEventListener('DOMContentLoaded', (event) => {
    startTypingEffect();
  });
  
  function startTypingEffect() {
    const sentences = [
      "Welcome to \"Will You Survive The Gold Rush\"!",
      "We have created a historically accurate game that will take you down the journey of a Gold Prospector.",
      "This is a decision based game with a storyline behind everything.",
      "Some decisions can have impacts long down the road.",
      "Spoiler alert, it's not gonna be easy.",
      "But sprinkled in between everything will be some easter eggs >:D",
      "We hope you enjoy the game!",
      "",
      "Now first you will be choosing what race you will be for the rest of the game."
    ];
    const textContainer = document.getElementById('text');
    let sentenceIndex = 0;
    const typingSpeed = 50;
    const sentencePause = 1000;
  
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
  }
  
  function goToNextPage() {
    window.location.href = '../chooseRace/race.html';
  }
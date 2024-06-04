document.addEventListener('DOMContentLoaded', (event) => {
    startTypingEffect();
  });
  
  function startTypingEffect() {
    const sentences = [
      "Congratulations, you have reached Day 1",
      "This is where you can start making back all the money you spent to get here",
      "As you progress through the game, you will unlock more ways to mine gold",
      "Happy Mining!"
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
    window.location.href = '../miningMethod/method.html';
  }
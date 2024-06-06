document.addEventListener('DOMContentLoaded', (event) => {
    startTypingEffect();
  });
  
  function startTypingEffect() {
    const sentences = [
      "You survived the Gold Rush!",
      "This game was developed by Leo Yang",
      "and jason but he doesn\'t really count",
      "We hope you enjoyed!",
      "The next screen will show your final score, calculated by how much money and hearts you ended with"
    ]
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
    window.location.href = 'scoreScreen.html';
  }
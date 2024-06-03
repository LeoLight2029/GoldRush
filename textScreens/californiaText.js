document.addEventListener('DOMContentLoaded', (event) => {
    startTypingEffect();
  });
  
  function startTypingEffect() {
    const sentences = [
      "Congratulations, you have finally arrived at California",
      "I hope you have an adequate amount of money because you still need to buy tools and food",
      "Before settling in anywhere, you decide to resupply your food, since your journey used up all of it",
      "After that you will finally buy supplies and start your Gold Prospecting Carreer!"
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
    window.location.href = '../food/food.html';
  }
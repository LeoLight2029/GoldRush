document.addEventListener('DOMContentLoaded', (event) => {
    startTypingEffect();
  });
  
  function startTypingEffect() {
    const sentences = [
      "Day 2",
      "You will notice that there is an extra method of mining now :D",
      "We recommend checking out all the new methods, however it is all up to you!"
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
    localStorage.setItem('day', 2)
    window.location.href = '../miningMethod/method.html';
  }
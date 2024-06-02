document.addEventListener('DOMContentLoaded', (event) => {
    startTypingEffect();
  });
  
  function startTypingEffect() {
    const sentences = [
      "Welcome to the Gambling Room where you can further test your luck",
      "You have the option to put your money at risk to have a chance to double it",
      "You're allowed to do this as many times as you want",
      "However the more money you lose, the harder the rest of the game will be",
      "You can also choose to skip this entirely if you want",
      "Happy Gambling :D"
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
    window.location.href = '../gambling/gambling.html';
  }
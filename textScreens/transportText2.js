document.addEventListener('DOMContentLoaded', (event) => {
    dialouge();
  });
function dialouge() {
    const sentences = [
        `Congratulations, you ended up with $${localStorage.getItem('cash')}`,
        "Now we can finally begin the journey to California!",
        "Make sure to choose your path carefully, as to not lose hearts or waste your cash",
        "Good Luck!"
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
  }
  
  function goToNextPage() {
    window.location.href = '../transport/transport.html';
  }
  document.getElementById('info').textContent=`Hearts: ${localStorage.getItem('heart')} Cash: ${localStorage.getItem('cash')}`

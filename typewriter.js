const typewriterText = document.querySelector('.typewriter');
const textToType = typewriterText.innerHTML;

// Clear the text initially
typewriterText.innerHTML = '';

let index = 0;
const typingDelay = 100; // Delay between typing each character

function typeNextCharacter() {
  if (index < textToType.length) {
    typewriterText.innerHTML += textToType.charAt(index);
    index++;
    setTimeout(typeNextCharacter, typingDelay);
  }
}

typeNextCharacter();

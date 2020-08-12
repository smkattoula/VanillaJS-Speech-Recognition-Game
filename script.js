const msgEL = document.getElementById("msg");

const randomNum = getRandomNumber();

console.log("Number:", randomNum);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

// Start recognition and game
recognition.start();

// Create a function that captures user speak
function onSpeak(e) {
  const msg = e.results[0][0].transcript;

  //   writeMessage(msg);
  //   checkNumber(msg);
}

// Create a function that generates a random number
function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}

// Speak result
recognition.addEventListener("result", onSpeak);

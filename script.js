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

  writeMessage(msg);
  checkNumber(msg);
}

// Create a function that writes what the user speaks
function writeMessage(msg) {
  msgEL.innerHTML = `<div>You said: </div>
    <span class="box">${msg}</span>`;
}

// Create a function that checks msg against number
function checkNumber(msg) {
  const num = +msg;

  // Check if valid number
  if (Number.isNaN(num)) {
    return (msgEL.innerHTML += "<div>That is not a valid number</div>");
  }

  // Check if in range
  if (num > 100 || num < 1) {
    return (msgEL.innerHTML += "<div>Number must be between 1 - 100</div>");
  }

  // Check random number
  if (num === randomNum) {
    document.body.innerHTML = `<h2>Congratulations! You've guessed the correct number! <br><br> It was ${num}</h2>
      <button class="play-again" id="play-again">Play Again</button>`;
  } else if (num > randomNum) {
    msgEL.innerHTML += "<div>GO LOWER</div>";
  } else {
    msgEL.innerHTML += "<div>GO HIGHER</div>";
  }
}

// Create a function that generates a random number
function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}

// Speak result
recognition.addEventListener("result", onSpeak);

// End Speech Recognition service
recognition.addEventListener("end", () => recognition.start());

document.body.addEventListener("click", (e) => {
  if (e.target.id === "play-again") {
    window.location.reload();
  }
});

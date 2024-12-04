const players = [
  {
    name: "Lionel Messi",
    hints: [
      "Hint 1: He is from Argentina.",
      "Hint 2: He plays as a forward.",
      "Hint 3: He has won multiple Ballon d'Or awards.",
      "Hint 4: He moved to Inter Miami in 2023.",
    ],
  },
  {
    name: "Cristiano Ronaldo",
    hints: [
      "Hint 1: He is from Portugal.",
      "Hint 2: He is known for his incredible jumping ability.",
      "Hint 3: He has played for clubs like Manchester United, Real Madrid, and Juventus.",
      "Hint 4: He became Al-Nassr's star in 2023.",
    ],
  },
  {
    name: "Neymar Jr.",
    hints: [
      "Hint 1: He is from Brazil.",
      "Hint 2: Known for his exceptional dribbling skills.",
      "Hint 3: Played for Barcelona and PSG.",
      "Hint 4: Moved to Al-Hilal in 2023.",
    ],
  },
];

let currentPlayer;
let currentHint = 0;

function loadPlayer() {
  currentHint = 0;
  feedback.textContent = "";
  guessInput.value = "";

  currentPlayer = players[Math.floor(Math.random() * players.length)];

  const hintsContainer = document.getElementById("hints");
  hintsContainer.innerHTML = "";

  currentPlayer.hints.forEach((hint) => {
    const hintElement = document.createElement("p");
    hintElement.classList.add("hint");
    hintElement.style.display = "none";
    hintElement.textContent = hint;
    hintsContainer.appendChild(hintElement);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const guessInput = document.getElementById("guess");
  const submitButton = document.getElementById("submit");
  const hintButton = document.getElementById("hint-btn");
  const feedback = document.getElementById("feedback");

  loadPlayer();

  hintButton.addEventListener("click", () => {
    const hints = document.querySelectorAll(".hint");
    if (currentHint < hints.length) {
      hints[currentHint].style.display = "block";
      currentHint++;
    } else {
      feedback.textContent = "No more hints available!";
    }
  });

  submitButton.addEventListener("click", () => {
    const userGuess = guessInput.value.trim();
    if (userGuess.toLowerCase() === currentPlayer.name.toLowerCase()) {
      feedback.textContent = `Correct! 🎉 It's ${currentPlayer.name}!`;
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Wrong guess! Try again.";
      feedback.style.color = "red";
    }
  });

  document.getElementById("next-btn").addEventListener("click", loadPlayer);
});

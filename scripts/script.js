"use strict";

let arrayOfQuestions = [
  "What is the capital of Brazil?",
  "Which river is the longest in the world?",
  "Which desert is the largest in the world?",
  "Mount Everest, the world's highest peak, is located in which mountain range?",
  "Which country is the largest producer of coffee in the world?",
  "Which European city is known as the 'City of Canals'?",
  "The Great Barrier Reef, one of the world's most extensive coral reef systems, is located off the coast of which country?",
  "Which African country is known as the 'Land of a Thousand Hills'?",
  "The city of Istanbul is located in two continents. Which continents are they?",
  "Machu Picchu, an ancient Incan citadel, is located in which country?",
];

let nestedAnswers = [
  ["Rio de Janeiro", "São Paulo", "Brasília", "Buenos Aires"],
  ["Nile River", "Amazon River", "Yangtze River", "Mississippi River"],
  ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
  ["Andes", "Himalayas", "Rocky Mountains", "Alps"],
  ["Colombia", "Brazil", "Vietnam", "Ethiopia"],
  ["Venice", "Amsterdam", "Copenhagen", "Bruges"],
  ["Australia", "Indonesia", "Belize", "Brazil"],
  ["Rwanda", "Kenya", "Tanzania", "Uganda"],
  [
    "Asia and Europe",
    "Europe and Africa",
    "Asia and Africa",
    "Asia and Australia",
  ],
  ["Peru", "Mexico", "Bolivia", "Chile"],
];

let finalAnswers = [
  "Brasília",
  "Nile River",
  "Antarctic Desert",
  "Himalayas",
  "Brazil",
  "Venice",
  "Australia",
  "Rwanda",
  "Asia and Europe",
  "Peru",
];

const questionInput = document.getElementById("mainquestion");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const options = document.querySelectorAll(
  "#option-1, #option-2, #option-3, #option-4"
);
const submit = document.getElementById("submit");
const reset = document.getElementById("reset-btn");

let indexCheckValue = 0;
displayQuestion(indexCheckValue);

function displayQuestion(index) {
  questionInput.innerText = arrayOfQuestions[index];
  let answers = nestedAnswers[index];
  for (let i = 0; i < options.length; i++) {
    options[i].innerText = answers[i];
  }
  resetColor();
  if (
    arrayOfQuestions[index] ===
    "Machu Picchu, an ancient Incan citadel, is located in which country?"
  ) {
    nextBtn.disabled = true;
    nextBtn.classList.add("nextOnly");
  } else {
    nextBtn.disabled = false;
    nextBtn.classList.remove("nextOnly");
  }

  if (arrayOfQuestions[index] === "What is the capital of Brazil?") {
    prevBtn.disabled = true;
    prevBtn.classList.add("nextOnly");
  } else {
    prevBtn.disabled = false;
    prevBtn.classList.remove("nextOnly");
  }
}

function nextQuestion() {
  indexCheckValue++;
  if (indexCheckValue < arrayOfQuestions.length) {
    displayQuestion(indexCheckValue);
  } else {
    nextBtn.disabled = true;
    nextBtn.classList.add("nextOnly");
  }
  prevBtn.disabled = false;
  prevBtn.classList.remove("nextOnly");
}

function prevQuestion() {
  indexCheckValue--;
  if (indexCheckValue >= 0) {
    displayQuestion(indexCheckValue);
  } else {
    prevBtn.disabled = true;
    prevBtn.classList.add("nextOnly");
  }
  nextBtn.disabled = false;
  nextBtn.classList.remove("nextOnly");
}

let userAnswers = new Array(arrayOfQuestions.length).fill(null);

function checkAnswer(selectedIndex) {
  const selectedAnswer = nestedAnswers[indexCheckValue][selectedIndex];
  userAnswers[indexCheckValue] = selectedAnswer;
  console.log("Selected Answer:", selectedAnswer);
}

function colorChange() {
  options.forEach((option, index) => {
    option.addEventListener("click", () => {
      options.forEach((el) => {
        el.classList.remove("back-clr-change");
      });

      option.classList.add("back-clr-change");
      checkAnswer(index);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  colorChange();
});

function resetColor() {
  options.forEach((option) => {
    option.classList.remove("back-clr-change");
  });
}

function calculateScore() {
  let score = 0;
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === finalAnswers[i]) {
      score++;
    }
  }
  const totalQuestions = arrayOfQuestions.length;
  const message = `Your score: ${score}/${totalQuestions}`;
  alert(message);
}

function resetEverything() {
  userAnswers = new Array(arrayOfQuestions.length).fill(null);
  indexCheckValue = 0;
  displayQuestion(indexCheckValue);
}

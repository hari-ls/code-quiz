// Initialise values
var questionBank = [
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: 2,
  },
  {
    question: "Commonly used data types DO NOT include:",
    options: ["strings", "booleans", "alerts", "numbers"],
    answer: 2,
  },
  {
    question:
      "The condition in an if/else statement is enclosed within ______.",
    options: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: 2,
  },
  {
    question: "Arrays in JavaScript can be used to store _________.",
    options: [
      "numbers and strings ",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: 3,
  },
  {
    question:
      "A very useful tool used during development and debugging  content to the debugger is:",
    options: ["JavaScript ", "terminal / bash", "for loops", "console.log"],
    answer: 3,
  },
];

// Initialise selectors
var welcome = document.querySelector(".welcome");
var quiz = document.querySelector(".quiz");
var result = document.querySelector(".result");
var start = document.querySelector("#start-quiz");
var submit = document.querySelector("#submit");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#back");
var question = document.querySelector(".question");
var answers = document.querySelector(".answers");
var outcome = document.querySelector(".outcome");
var timer = document.querySelector(".timer");
var score = document.querySelector("#score");

// Initialise operators
var countdown = 100,
  countdownTimer,
  progress = 0,
  score,
  leaderBoard = [],
  totalQuestions = questionBank.length;

// On start - present questions and options
var startQuiz = start.addEventListener("click", function (event) {
  event.preventDefault();
  welcome.setAttribute("style", "display: none");
  quiz.setAttribute("style", "display: block");
  reverseCountdown();
  presentQuestion(questionBank[progress]);
});
// Start the countdown timer
var reverseCountdown = function () {
  timer.textContent = countdown;
  countdownTimer = setInterval(function () {
    console.log(countdown);
    if (countdown > 0) {
      countdown--;
      timer.textContent = countdown;
    } else {
      quizComplete();
      clearInterval(countdownTimer);
    }
  }, 1000);
};
// Present the selected question to the user
var presentQuestion = function (obj) {
  var query = obj.question;
  question.innerHTML = "";
  var questionText = document.createElement("h2");
  questionText.textContent = query;
  question.append(questionText);
  presentOptions(obj);
};
// Present the option and check of inputs for the selected question
var presentOptions = function (obj) {
  var options = obj.options;
  answers.innerHTML = "";
  for (let i = 0; i < options.length; i++) {
    var option = document.createElement("p");
    option.setAttribute("class", "option");
    answers.append(option);
    var optionText = document.createElement("a");
    optionText.setAttribute("data-option", i);
    optionText.textContent = i + 1 + ". " + options[i];
    option.append(optionText);
  }
  // Check selection
  var checkSelection = function (event) {
    // progress = questionBank.indexOf(obj) + 1;
    progress++;
    var userClicked = event.target;
    var userSelection = userClicked.getAttribute("data-option");
    if (userSelection == obj.answer) {
      presentOutcome(true);
      answers.removeEventListener("click", checkSelection);
    } else {
      countdown -= 10;
      presentOutcome(false);
      answers.removeEventListener("click", checkSelection);
    }
  };
  answers.addEventListener("click", checkSelection);
};
// Present the outcome based on user selection for the current question
var presentOutcome = function (bool) {
  outcome.setAttribute("style", "display: block");
  if (bool) {
    outcome.textContent = "Correct!";
  } else {
    outcome.textContent = "Wrong!";
  }
  setInterval(function () {
    outcome.setAttribute("style", "display: none");
  }, 1000);
  if (questionBank[progress]) {
    presentQuestion(questionBank[progress]);
  } else {
    quizComplete();
  }
  clearInterval();
};

var quizComplete = function () {
  quiz.setAttribute("style", "display: none");
  result.setAttribute("style", "display: block");
  clearInterval(countdownTimer);
  finalScore = countdown;
  timer.textContent = 0;
  console.log("Your score is " + finalScore);
  score.textContent = finalScore;
  var getInitials = submit.addEventListener("click", function (event) {
    event.preventDefault();
    // update score
  });
};

var initliaseScores = function () {
  var storedScores = JSON.parse(localStorage.getItem("scores"));
  if (!storedScores) {
    localStorage.setItem("scores", JSON.stringify(leaderBoard));
  } else {
    leaderBoard = storedScores;
  }
  console.log(leaderBoard);
};
var updateScores = function () {};

// initliaseScores();
var temp = [
  { initials: "HS", score: 90 },
  { initials: "AS", score: 95 },
];
localStorage.setItem("scores", JSON.stringify(temp));
// presentQuestion(questionBank[0]);
// presentOptions(questionBank[0]);
// presentOutcome(false);

// setInterval(function () {
//   presentQuestion(questionBank[1]);
// }, 5000);
// setInterval(function () {
//   presentQuestion(questionBank[2]);
// }, 10000);
// setInterval(function () {
//   quizComplete();
// }, 10000);

// List for a selection

// Check correct or incorrect and present outcome

// Present next - until last

// Set timer

// Calculate and present result

// Update leaderboard

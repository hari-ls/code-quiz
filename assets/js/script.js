// Initialise values
var questionBank = [
  {
    question: "First question",
    options: ["one", "two", "three", "four"],
    answer: 0,
  },
  {
    question: "Second question",
    options: ["one", "two", "three", "four"],
    answer: 1,
  },
  {
    question: "Third question",
    options: ["one", "two", "three", "four"],
    answer: 2,
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
var query = document.querySelector(".query");
var selection = document.querySelector(".selection");
var outcome = document.querySelector(".outcome");
var timer = document.querySelector(".timer");

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
  var question = obj.question;
  query.textContent = question;
  presentOptions(obj);
};
// Present the option and check of inputs for the selected question
var presentOptions = function (obj) {
  var options = obj.options;
  selection.innerHTML = "";
  for (let i = 0; i < options.length; i++) {
    var listItem = document.createElement("li");
    listItem.setAttribute("class", "options");
    listItem.setAttribute("data-option", i);
    listItem.textContent = options[i];
    selection.appendChild(listItem);
  }
  // Check selection
  var checkSelection = function (event) {
    // progress = questionBank.indexOf(obj) + 1;
    progress++;
    var userClicked = event.target;
    var userSelection = userClicked.getAttribute("data-option");
    if (userSelection == obj.answer) {
      presentOutcome(true);
      selection.removeEventListener("click", checkSelection);
    } else {
      countdown -= 10;
      presentOutcome(false);
      selection.removeEventListener("click", checkSelection);
    }
  };
  selection.addEventListener("click", checkSelection);
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
  score = countdown;
  timer.textContent = 0;
  console.log("Your score is " + score);
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
var temp = [{ initials: "HS", score: 90 }];
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

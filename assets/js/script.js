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
    answer: 0,
  },
  {
    question: "Third question",
    options: ["one", "two", "three", "four"],
    answer: 0,
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

// Initialise operators
var leaderBoard,
  question,
  options,
  listItem,
  totalQuestions = questionBank.length;

// On start - present questions and options
var startQuiz = start.addEventListener("click", function (event) {
  event.preventDefault();
  welcome.setAttribute("style", "display: none");
  quiz.setAttribute("style", "display: block");
  presentQuestion(questionBank[0]);
  presentOptions(questionBank[0]);
  presentOutcome(false);
});

var presentQuestion = function (obj) {
  question = obj.question;
  query.textContent = question;
};

var presentOptions = function (obj) {
  options = obj.options;
  selection.innerHTML = "";
  for (let i = 0; i < options.length; i++) {
    listItem = document.createElement("li");
    listItem.setAttribute("class", "options");
    listItem.setAttribute("data-option", i);
    listItem.textContent = options[i];
    selection.appendChild(listItem);
  }
};

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
  clearInterval();
};

var quizComplete = function () {
  quiz.setAttribute("style", "display: none");
  result.setAttribute("style", "display: block");
};

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

// Calculate and present result

// Update leaderboard

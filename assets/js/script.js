
let showQuestionPage = () => {
  hideHomepage();
  document.querySelector("#question").removeAttribute("class", "hide");
}

let hideHomepage = () => {
  document.querySelector("#home").setAttribute("class", "hide");
}
// Create a listener for when the start button is clicked
let startQuiz = document.getElementById("startQuiz").addEventListener("click", showQuestionPage);


// Create an array of questions
let questions = [];
let question = {"Question": "What does HTML stand for?",
                "Answer1": "HyperText Markup Language",
                "Answer2": "HyperTag Markup Language",
                "Answer3": "HyperText Markdown Language",
                "Answer4": "HyperTag Markdown Language",
                "Correct": "1"}
questions.push(question);
question = {"Question": "What does CSS stand for?",
                "Answer1": "Computed Style Sheets",
                "Answer2": "Console Style Sheets",
                "Answer3": "Computer Style Sheets",
                "Answer4": "Cascading Style Sheets",
                "Correct": "4"}
questions.push(question);

let loadQuestion = (question, answer1, answer2, answer3, answer4, correct) => {
  document.querySelector(".displayQuestion").innerHTML = question;
  document.querySelector(".answer1").innerHTML = answer1;
  document.querySelector(".answer2").innerHTML = answer2;
  document.querySelector(".answer3").innerHTML = answer3;
  document.querySelector(".answer4").innerHTML = answer4;
}

loadQuestion(questions[0]["Question"], questions[0]["Answer1"], questions[0]["Answer2"], questions[0]["Answer3"], questions[0]["Answer4"])
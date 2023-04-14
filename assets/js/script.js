let time = 100;
let displayTime = document.querySelector("#displayTime");
let interval;

// Create an array of questions
let questions = [
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "HyperTag Markup Language", "HyperText Markdown Language","HyperText Markdown Language"],
    answer: "HyperText Markdown Language"
  // },
  // {
  //   question: ,
  //   options: [],
  //   answer: 
  // },
  // {
  //   question: ,
  //   options: [],
  //   answer: 
  //   },
  // {
  //   question: ,
  //   options: [],
  //   answer: 
      }
];
let question = {
  "Question": "What does HTML stand for?",
  "Answer1": "HyperText Markup Language",
  "Answer2": "HyperTag Markup Language",
  "Answer3": "HyperText Markdown Language",
  "Answer4": "HyperTag Markdown Language",
  "Answer": "HyperText Markup Language"
}
questions.push(question);
question = {
  "Question": "What does CSS stand for?",
  "Answer1": "Computed Style Sheets",
  "Answer2": "Console Style Sheets",
  "Answer3": "Computer Style Sheets",
  "Answer4": "Cascading Style Sheets",
  "Correct": "4"
}
questions.push(question);

let loadQuestion = (question, answer1, answer2, answer3, answer4, correct) => {
  document.querySelector(".displayQuestion").innerHTML = question;
  document.querySelector(".answer1").innerHTML = answer1;
  document.querySelector(".answer2").innerHTML = answer2;
  document.querySelector(".answer3").innerHTML = answer3;
  document.querySelector(".answer4").innerHTML = answer4;
}


let startQuiz = () => {
  document.querySelector("#home").setAttribute("class", "hide");
  document.querySelector("#question").removeAttribute("class", "hide");
  interval = setInterval(myTimer, 1000);
  displayTime.textContent = time;

}

function myTimer() {
  time--;
  displayTime.textContent = time;
  if (time === 0) {
    // Create end game function
    console.log("create endGame()");
  }
}

// Create a listener for when the start button is clicked
document.getElementById("startQuiz").addEventListener("click", startQuiz);




loadQuestion(questions[0]["Question"], questions[0]["Answer1"], questions[0]["Answer2"], questions[0]["Answer3"], questions[0]["Answer4"])
let time = 100;
// Shows time counting down
let displayTime = document.querySelector("#displayTime");
let interval;
// Create a counter for what quesntion number should be diplayed
let questionNum = 0;
let score = 0;

document.querySelector(".displayScore").textContent = score;

// Create an array of questions
let questions = [
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "HyperTag Markup Language", "HyperText Markdown Language","HyperTag Markdown Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "What does CSS stand for?",
    options: ["Computed Style Sheets", "Console Style Sheets", "Computer Style Sheets", "Cascading Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What is the first month of the year?",
    options: ["March", "January", "June", "May"],
    answer: "January"
    }//,
  // {
  //   question: ,
  //   options: [],
  //   answer: 
  //    }
];


let loadQuestion = () => {
  if(questionNum === questions.length) {
    endGame();
  }
  document.querySelector(".displayQuestion").innerHTML = questions[questionNum]['question'];

  // Display the options in the appropriate div
  for(let i=0; i<4; i++) {
    let newDiv = document.createElement("div").setAttribute("class", "option" + (i+1).toString())
    document.querySelector(".answer" + (i+1).toString()).innerHTML = questions[questionNum]["options"][i];
  }
}

function endGame() {
  // Hide question page
  document.getElementById("question").setAttribute("class", "hide");

  // Show Score page
  document.getElementById("scorePage").removeAttribute("class", "hide");

  // Display score
  document.querySelector(".displayScore").textContent = score;

  // Hide timer
  document.querySelector(".time").setAttribute("class", "time hide");

  // Clear timer
  clearInterval()
}

let startQuiz = () => {
  document.querySelector("#home").setAttribute("class", "hide");
  document.querySelector("#question").removeAttribute("class", "hide");
  interval = setInterval(myTimer, 1000);
  displayTime.textContent = time;
  loadQuestion(questions, questionNum);

}

function myTimer() {
  time--;
  displayTime.textContent = time;
  if (time <= 0) {
    endGame();
    clearInterval(time);
  }
}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

function checkAnswer() {
  // Checkif answer is correct
  document.querySelector(".response").innerHTML = "";
  wait(1000);
  if(this.textContent === questions[questionNum]["answer"]) {
    // Increment score and move on to next question
    document.querySelector(".response").innerHTML = "Right!"
    questionNum++;
    updateScore();
    loadQuestion();
  } else {
    // decrease time
    document.querySelector(".response").innerHTML = "Wrong!"
    subtractTime();
  }
}

function subtractTime() {
  time -= 15;
}

function updateScore() {
  score++;
}
// Create a listener for when the start button is clicked
document.getElementById("startQuiz").addEventListener("click", startQuiz);

// Create listenders for question options
document.querySelector(".answer1").addEventListener("click", checkAnswer);
document.querySelector(".answer2").addEventListener("click", checkAnswer);
document.querySelector(".answer3").addEventListener("click", checkAnswer);
document.querySelector(".answer4").addEventListener("click", checkAnswer);




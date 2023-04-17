let time = 100;
// Shows time counting down
let displayTime = document.querySelector("#displayTime");
let interval;
// Create a counter for what quesntion number should be diplayed
let questionNum = 0;
let score = 0;

let initals = "";

let scoreArray = JSON.parse(localStorage.getItem("scores"));

document.querySelector(".displayScore").textContent = score;

// Display top scores
// if()
// document.querySelector(".score1").textContent = scoreArray[0];

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
  clearInterval(time);


  // Hide question page
  document.getElementById("question").setAttribute("class", "hide");

  // Show Score page
  document.getElementById("scorePage").removeAttribute("class", "hide");
  document.querySelector("#highScores").removeAttribute("class", "hide");

  // Display score
  document.querySelector(".displayScore").textContent = score;

  // Hide timer
  document.querySelector(".time").setAttribute("class", "time hide");

  // Display high scores
  displayHighScore();

  // Clear timer
  clearInterval();
}

let startQuiz = () => {
  hideHomePage();
  showQuestion();
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
  wait(100);
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
  score -= 2;
}

function updateScore() {
  score += 10;
}

function hideScorePage() {
  document.querySelector("#scorePage").setAttribute("class", "high");
}

function resetQuestionNum() {
  questionNum = 0;
}

function storeScore() {
  // Hide end game page
  hideScorePage();

  // Show HTML to user
  document.querySelector("#highScores").removeAttribute("class", "hide")

  if(localStorage.getItem("scores") == null) {
    localStorage.setItem("scores", "[]");
  }
  let initials = document.querySelector("#initialsInput").value;
  newScore = [score, initials.substring(0, 3)];
  
  let oldScore = JSON.parse(localStorage.getItem("scores"));

  oldScore.push(newScore);

  // Sort top scores and only return top 5
  let sortedScore = sortScore(oldScore);

  // Store in localStorage
  localStorage.setItem("scores", JSON.stringify(sortedScore));

  displayHighScore();
}

function displayHighScore() {
  // display list of high scores

  let scores = JSON.parse(localStorage.getItem("scores"));

  // Display each high score with initials
  for(let i=0; i < scores.length; i++) {
    let tag = ".score" + (i+1).toString()
    document.querySelector(tag).textContent = (i+1).toString() + "." + "  " + scores[i][1] + " " + scores[i][0]
  }
}

function sortScore(score) {
  // sort score array and keeep top 5 scores

  score.sort(function(a, b) {
    return b[0] - a[0]; //|| a[1] - b[1]
  })
  score.sort(function(a, b) {
    return a[1].toUpperCase().localeCompare(b[1].toUpperCase());
  })
  return score.slice(0, 5);
  
}

function endGameLink() {
  // if someone hits the viewhigh scores link:
  endGame();
  clearInterval(interval);
  time = 100;

  // Hide Home page
  document.querySelector("#home").setAttribute("class", "hide");

  // Hide entry for initials
  document.querySelector("#scorePage").setAttribute("class", "hide");
}

function clearScores(){
  localStorage.removeItem("scores");
  document.querySelector(".scores").innerHTML = "";
}

function hideHighScores() {
  // Hide hish higch score page
  document.querySelector("#highScores").setAttribute("class", "hide");
}

function hideScorePage() {
  document.querySelector("#scorePage").setAttribute("class", "hide");
}

function goBack() {
  time = 100;
  clearInterval(interval);
  // return to first page 
  hideScorePage();
  showHomePage();
  hideHighScores();
  hideQuestion();

  // Show timer
  document.querySelector(".time").setAttribute("class", "time");


}



function hideQuestion() {
  document.querySelector("#question").setAttribute("class", "hide");
}

function showQuestion() {
  document.querySelector("#question").removeAttribute("class", "hide");
  hideHighScores();
  hideHomePage();
  hideQuestion();
  hideScorePage();
}

function showHomePage() {
  resetQuestionNum();
  console.log(questionNum);
  document.querySelector("#home").removeAttribute("class", "hide");
  hideHighScores();
  hideQuestion();
  hideScorePage();
}

function hideHomePage() {
  document.querySelector("#home").setAttribute("class", "hide");
}

// Create a listener for when the start button is clicked
document.getElementById("startQuiz").addEventListener("click", startQuiz);

// Create listenders for question options
document.querySelector(".answer1").addEventListener("click", checkAnswer);
document.querySelector(".answer2").addEventListener("click", checkAnswer);
document.querySelector(".answer3").addEventListener("click", checkAnswer);
document.querySelector(".answer4").addEventListener("click", checkAnswer);

// Create and event listener for when the initals submit button is clicked
document.querySelector("#scoreSubmit").addEventListener("click", storeScore);

// View high scores
document.querySelector(".highScores").addEventListener("click", endGameLink);

// Clear scores
document.querySelector("#clearScores").addEventListener("click", clearScores);

// Restart quiz
document.querySelector("#goBack").addEventListener("click", goBack);



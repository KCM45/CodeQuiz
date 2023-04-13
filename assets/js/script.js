
let showQuestionPage = () => {
  hideHomepage();
  let quest = document.getElementById("question");
  if(quest.style.display === "none") {
    quest.style.display = "block";
  }
}

let hideHomepage = () => {
  let home = document.getElementById("home");
  if(home.style.display !== "none") {
    home.style.display = "none";
  }
}
// Create a listener for when the start button is clicked
let startQuiz = document.getElementById("startQuiz").addEventListener("click", showQuestionPage);

// Default to question page not being displayed
document.getElementById("question").style.display = "none";
//document.getElementById("home").style.display = "block";

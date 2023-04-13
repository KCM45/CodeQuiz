// When start button on home page is clicked, hide homepage and display question page

// Create a listener for when the start button is clicked
document.getElementById("startQuiz").addEventListener("click", showQuestionPage);

showQuestionPage = () => {
  console.log("showQ")
  hideHomepage();
  let quest = document.getElementById("question")
  if(quest.style.display === "none") {
    console.log("quest.style")
    quest.style.display = "block";
  }
}

hideHomepage = () => {
  let home = document.getElementById("home");
  if(home.style.display === "block") {
    home.style.display = "none";
  }
}
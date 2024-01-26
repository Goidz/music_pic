/* Question/answer section */
let questionList = [
  {
    question: "This song is by an artist who famously played his guitar upside down",
    options: [
      { choice: "Murder in the Red Barn", correct: false},
      { choice: "Red House", correct: true},
      { choice: "Red Barchetta", correct: false},
      { choice: "Out in the Fields", correct: false},
    ],
    image: "assets/images/red-house.jpg"
  },
  {
    question: "This song is by a band who's name was derived from a comcic book character, they also have a popular song referencing a type of alcohol",
    options: [
      { choice: "I Fought the Law- The Clash", correct: false},
      { choice: "Rusty Cage- Soundgarden", correct: false},
      { choice: "Jailbreak- Thin Lizzy", correct: true},
      { choice: "The Prisoner- Tears for Fears", correct: false},
    ],
    image: "assets/images/jailbreak.jpg"
  },
    {
      question: "Several of this band's members died in a plane crash. They have a hit song about a Southern State.",
      options: [
        { choice: "I want to Break Free- Queen", correct: false},
        { choice: "Free as a Bird- The Beatles", correct: false},
        { choice: "I wanna be Free- The Monkeys", correct: false},
        { choice: "Free Bird- Lynyrd Skynyrd", correct: true},
      ],
      image: "assets/images/free-bird.jpg"
    },    
];

let questionIndex = 0;
let currentQuestion = questionList[questionIndex];
let score = 0;

/* Displaying the question and answers */
function showQuestion(currentQuestion){
    document.getElementById("image").src = currentQuestion.image;
    document.getElementById("question-text").innerText = currentQuestion.question;
    document.getElementById("option1").innerText = currentQuestion.options[0].choice;
    document.getElementById("option2").innerText = currentQuestion.options[1].choice;
    document.getElementById("option3").innerText = currentQuestion.options[2].choice;
    document.getElementById("option4").innerText = currentQuestion.options[3].choice;
};

/* Displaying the next question */ 
function showNextQuestion(){
  questionIndex = questionIndex + 1;
  currentQuestion = questionList[questionIndex];
  /* Figure out if end of quiz!!!!! */
  showQuestion(currentQuestion); 
};

/* Resets the  next question from previous selection*/
function resetOptions(){
  document.querySelectorAll("button.answer").forEach((button)=>{
    button.classList.remove("correct-answer");
    button.classList.remove("wrong-answer");
  });
};

/* User answer validation */
function validateAnswer(event){
  const clickedButton = event.target;
  const userAnswer = parseInt(clickedButton.getAttribute("data-option")); /* Converts string to integer */
  const answer = currentQuestion.options[userAnswer];
  /* if/else statement to check answers and award point/or not */
  if (answer.correct === true){
    console.info("Correct Answer");
    score = score + 1;
    clickedButton.classList.add("correct-answer");
    document.getElementById("score").innerText = "Score:" + score;
  }
  else{
    console.error("Wrong answer");
    clickedButton.classList.add("wrong-answer");
  } /* Adds timed intervals between questions (2 second intervals/ 2000 miliseconds) */
  setTimeout(function(){
    resetOptions();
    showNextQuestion();
  }, 2000)
 
}
/* TO DO!!! */
function timer(){}

/* TO DO!!! */
function gameOver(){}

document.querySelectorAll("button.answer").forEach((button)=>{
  button.addEventListener("click", validateAnswer);

});

showQuestion(currentQuestion);

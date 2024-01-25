let questionList = [
    {
      question: "This song is by an artist who famously played his guitar upside down",
      options: [
        { choice: "Murder in the Red Barn", correct: false},
        { choice: "Red House", correct: true},
        { choice: "Red Barchetta", correct: false},
        { choice: "Out in the Fields", correct: false},
      ],
      image: "assets/images/red-house.jpg",
    },
    {
      question: "This song is by a band who's name was derived from a comcic book character, they also have a popular song referencing a type of alcohol",
      options: [
        { choice: "I Fought the Law-The Clash", correctChoice: false},
        { choice: "Rusty Cage-Soundgarden", correctChoice: true},
        { choice: "Jailbreak-Thin Lizzy", correctChoice: false},
        { choice: "The Prisoner-Tears for Fears", correctChoice: false},
      ],
      image: "assets/images/jailbreak.jpg"
    },
    {
      question: "This song is by an artist who famously played his guitar upside down",
      options: [
        { choice: "Murder in the Red Barn", correct: false},
        { choice: "Red House", correct: true},
        { choice: "Red Barchetta", correct: false},
        { choice: "Out in the Fields", correct: false},
      ],
    }    
];

let questionIndex = 0;
let currentQuestion = null;

/* Displaying the question and answers */
function showQuestion(mainQuestion){
    document.getElementById('image').src = questionList[0].image;
    document.getElementById('question-text').innerText = questionList[0].question;
    document.getElementById('option1').innerText = questionList[0].options[0].choice;
    document.getElementById('option2').innerText = questionList[0].options[1].choice;
    document.getElementById('option3').innerText = questionList[0].options[2].choice;
    document.getElementById('option4').innerText = questionList[0].options[3].choice;
    return mainQuestion;
};

let quizQuestion = showQuestion();

function showNextQuestion(){
  currentQuestion = quizQuestion[questionIndex];
  showQuestion(currentQuestion);
  questionIndex = questionIndex++;
}


document.querySelectorAll('button.answer').forEach((button)=>{
  button.addEventListener('click', showNextQuestion());

})

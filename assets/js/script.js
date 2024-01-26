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
    document.getElementById('image').src = currentQuestion.image;
    document.getElementById('question-text').innerText = currentQuestion.question;
    document.getElementById('option1').innerText = currentQuestion.options[0].choice;
    document.getElementById('option2').innerText = currentQuestion.options[1].choice;
    document.getElementById('option3').innerText = currentQuestion.options[2].choice;
    document.getElementById('option4').innerText = currentQuestion.options[3].choice;
};

/* Displaying the next question */ 
function showNextQuestion(){
  questionIndex = questionIndex + 1;
  currentQuestion = questionList[questionIndex];
  /* Figure out if end of quiz!!!!! */
  showQuestion(currentQuestion); 
};



showQuestion(currentQuestion);

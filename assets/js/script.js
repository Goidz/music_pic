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
      question: "This song is by an artist who famously played his guitar upside down",
      options: [
        { choice: "Murder in the Red Barn", correctChoice: false},
        { choice: "Red House", correctChoice: true},
        { choice: "Red Barchetta", correctChoice: false},
        { choice: "Out in the Fields", correctChoice: false},
      ],
      image: ".assets/images/piano-man.jpg"
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

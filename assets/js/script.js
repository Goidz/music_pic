/* Question/answer section */
let questionList = [
  {
    question: "David Bowie helped produce this band's third album. Together with the band's vocalist Bowie wrote 'China girl'.",
    options: [
      { choice: "Black Dog- Led Zeppelin", correct: false},
      { choice: "I Wanna be Your Dog- The Stooges.", correct: true},
      { choice: "Stray Dog- New Order", correct: false},
      { choice: "Shake Dog Shake- The Cure", correct: false},
    ],
    //- [ ] Photo by Don Agnello on Unsplash
    image: "assets/images/i_wanna_be_your_dog.webp", 
  },
  {
    question: "This song is by an artist who famously played his guitar upside down.",
    options: [
      { choice: "Murder in the Red Barn", correct: false},
      { choice: "Red House", correct: true},
      { choice: "Red Barchetta", correct: false},
      { choice: "Out in the Fields", correct: false},
    ],
    //Photo by Aron Fjell on Unsplash 
    image: "assets/images/red_house.webp",
  },
  {
    question: "This song is by a band who's name was derived from a comcic book character. They also have a popular song referencing a type of alcohol.",
    options: [
      { choice: "I Fought the Law- The Clash", correct: false},
      { choice: "Rusty Cage- Soundgarden", correct: false},
      { choice: "Jailbreak- Thin Lizzy", correct: true},
      { choice: "The Prisoner- Tears for Fears", correct: false},
    ],
    //Photo by Emiliano Bar on Unsplash
    image: "assets/images/jailbreak.webp",
  },
  { 
    question: "Several of this band's members died in a plane crash. They have a hit song about a Southern State.",
    options: [
      { choice: "I want to Break Free- Queen", correct: false},
      { choice: "Free as a Bird- The Beatles", correct: false},
      { choice: "I wanna be Free- The Monkeys", correct: false},
      { choice: "Free Bird- Lynyrd Skynyrd", correct: true},
    ],
    //Photo by Hasan Almasi on Unsplash 
    image: "assets/images/free_bird.webp",
  },
  { 
    question: "This song was by a British punk band. Their self-titled debut album was released in 1977.",
    options: [
      { choice: "We Are London- Madness", correct: false},
      { choice: "London Calling - The Clash", correct: true},
      { choice: "Waterloo Sunset- The Kinks", correct: false},
      { choice: "Westend Girls- Pet Shop Boys", correct: false},
    ],
    //Photo by John Jackson on Unsplash
    image: "assets/images/london_calling.webp",
  },
  { 
    question: "This song was by a band who first performed as The New Yardbirds.",
    options: [
      { choice: "Immigrant Song- Led Zeppelin", correct: true},
      { choice: "The Refugee - U2", correct: false},
      { choice: "Land of the Free- The Killers", correct: false},
      { choice: "Illegal Alien- Genesis", correct: false},
    ],
    //Photo by Boston Public Library on Unsplash
    image: "assets/images/immigrant_song.webp",
  },
  { 
    question: "This song is by a band whos drummer wrote most of their lyrics. He also published 6 books and sadly passed away in 2020.",
    options: [
      { choice: "Learning to fly- Pink Floyd", correct: false},
      { choice: "Jet Airliner- Steve Miller Band", correct: false},
      { choice: "Learn to Fly- Foo Fighters", correct: false},
      { choice: "Fly by Night- Rush", correct: true},
    ],
    //Photo by Katie Hetland on Unsplash
    image: "assets/images/fly_by_night.webp",
  },
  { 
    question: "This song is by a band who played Woodstock after The Grateful Dead at 3am. They were founded by 2 brothers and their two High-School friends.",
    options: [
      { choice: "Black Magic Woman- Santana", correct: false},
      { choice: "Don't Kill the Magic- Magic!", correct: false},
      { choice: "3 is a Magic Number- Blind Melon", correct: false},
      { choice: "I Put a Spell on You- Creedence Clearwater Revival", correct: true},
    ],
    //Photo by Elena Mozhvilo on Unsplash
    image: "assets/images/i_put_a_spell_on_you.webp",
  },
  { 
    question: "This band made the Guinness Book of Records for loudest concert. They also created the first successful Rock Opera.",
    options: [
      { choice: "A Thousand Miles away- The Heartbeats", correct: false},
      { choice: "Eight Miles High- The Byrds.", correct: false},
      { choice: "I can see for Miles- The Who", correct: true},
      { choice: "3/5 of a Mile in 10 Seconds- Jefferson Airplane", correct: false},
    ],
    //Photo by Ivan Aleksic on Unsplash
    image: "assets/images/i_can_see_for_miles.webp",
  },
  { 
    question: "This band was managed by Andy Warhol. They are named after a paper-back adult novel.",
    options: [
      { choice: "Venus in furs- The Velvet Underground", correct: true},
      { choice: "Jupiter Crash- The Cure", correct: false},
      { choice: "Venus- Shocking Blue", correct: false},
      { choice: "Moonchild- Iron Maiden", correct: false},
    ],
    //Photo by Tengyart on Unsplash
    image: "assets/images/venus_in_furs.webp", 
  },
  { 
    question: "This was a British-American rock band originating from London. They are named after the rhythm-section's members.",
    options: [
      { choice: "Unchained- Van Halen", correct: false},
      { choice: "Rocky Paths- Hawkwind", correct: false},
      { choice: "Safety Chain Blues- Midnight Oil", correct: false},
      { choice: "The Chain- Fleetwood Mac", correct: true},
    ],
    //Photo by Pascal Debrunner on Unsplash
    image: "assets/images/the_chain.webp", 
  },
  { 
    question: "Born in Ireland with influences such as Muddy Waters and Lead Belly. This artist released an album with a title also used to describe a die with 2 spots.",
    options: [
      { choice: "So Far away- Rod Steward", correct: false},
      { choice: "I can see for Miles- The Who", correct: false},
      { choice: "A Thousand Miles away- The Heartbeats", correct: false},
      { choice: "A Million Miles away- Rory Gallagher", correct: true},
    ],
    //Photo by Casey Horner on Unsplash
    image: "assets/images/a_million_miles_away.webp", 
  },
  { 
    question: "Formed in London 1962 with a debut album two years later. This band's original name was The Blues Boys",
    options: [
      { choice: "Psychedelic Shack- The Temptations", correct: false},
      { choice: "Gimme Shelter- The Rolling Stones", correct: true},
      { choice: "Shelter- The Beach Boys", correct: false},
      { choice: "Gimme Shelter- Grand Funk Railroad", correct: false},
    ],
    //Photo by alexey turenkov on Unsplash
    image: "assets/images/Gimme_shelter.webp", 
  },
  { 
    question: "An early press release stated this band's music was so loud. If they moved in next door, 'your lawn would die.'",
    options: [
      { choice: "The Joker- Steve Miller Band", correct: false},
      { choice: "Diamond Jack- Wishbone Ash", correct: false},
      { choice: "Queen of Hearts- Saxon", correct: false},
      { choice: "Ace of Spades- MotörHead", correct: true},
    ],
    //Photo by Inês Ferreira on Unsplash
    image: "assets/images/ace_in_the_hole.webp", 
  },
  { 
    question: " The vocalist got expelled from school for urinating in the headmaster's dinner. He is also a pilot that flies the bands plane.",
    options: [
      { choice: "Midnight Rider- The Allman Brothers Band", correct: false},
      { choice: "Living after Midnight- Judas Priest", correct: false},
      { choice: "2 Minutes to Midnight- Iron Maiden", correct: true},
      { choice: "Midnight Rambler- The Rolling Stones", correct: false},
    ],
    //Photo by alexandru vicol on Unsplash
    image: "assets/images/two_minutes_to_ midnight.webp", 
  },
];

let buttonBlocked = false;
let questionIndex = 0;
let currentQuestion = questionList[questionIndex];
let score = 0;
/* The quiz length */
const maxQuizQuestions = 5;
/* Start button to start game */
let startGame = document.getElementById("start");
startGame.addEventListener("click", start);

/* Starting the quiz */
function start(){
  document.getElementById("score").innerText = "Score: 0";
  shuffle(questionList);
  score = 0;
  questionIndex = 0;
  currentQuestion = questionList[questionIndex];
  showQuestion(currentQuestion);
  document.getElementById("question-holder").classList.remove("hidden");
}

/* Displaying the question and answers */
function showQuestion(currentQuestion){
    document.getElementById("image").src = currentQuestion.image;
    document.getElementById("question-text").innerText = currentQuestion.question;
    document.getElementById("option1").innerText = currentQuestion.options[0].choice;
    document.getElementById("option2").innerText = currentQuestion.options[1].choice;
    document.getElementById("option3").innerText = currentQuestion.options[2].choice;
    document.getElementById("option4").innerText = currentQuestion.options[3].choice;
}

/* Displaying the next question. Timer to skip to next question */ 
function showNextQuestion(){
  if (questionIndex < maxQuizQuestions - 1) {
    questionIndex = questionIndex + 1;
    currentQuestion = questionList[questionIndex];
    showQuestion(currentQuestion);
  }
  else{
    setTimeout(gameOver, 1500);
  }
}

/* Resets the  next question from previous selection */
function resetOptions(){
  document.querySelectorAll("button.answer").forEach((button)=>{
    button.classList.remove("correct-answer");
    button.classList.remove("wrong-answer");
  });
}

/* Using The Durstenfeld Shuffle. 
Found on Pitayan(https://pitayan.com/posts/javascript-shuffle-array/) which directed me to
 webbower (https://gist.github.com/webbower/8d19b714ded3ec53d1d7ed32b79fdbac) where I sourced it from */
function shuffle(questionList) {
    for (let i = questionList.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [questionList[i], questionList[j]] = [questionList[j], questionList[i]];
    }
}

 /* User answer validation */
function validateAnswer(event){
  if(buttonBlocked === false){
     buttonBlocked = true;
    const clickedButton = event.target;
    /* Converts string to integer */
    const userAnswer = parseInt(clickedButton.getAttribute("data-option")); 
    const answer = currentQuestion.options[userAnswer];
  /* if/else statement to check answers and award point/or not 
  buttons turn red if wrong, green if correct (connected to CSS) */
  if (answer.correct === true){
    console.info("Correct Answer");
    score = score + 1;   
    /* Calls the Css class and turns button red on wrong answer selection */
    clickedButton.classList.add("correct-answer");
    document.getElementById("score").innerText = `Score: ${score}/5`;
  }
  else{ 
    /* Calls the Css class and turns button red on wrong answer selection */
    console.error("Wrong answer");
    clickedButton.classList.add("wrong-answer");
  } 
  /* Adds timed intervals between questions and reset game. (2 second intervals/ 2000 miliseconds) */
  setTimeout(function(){
    resetOptions();
    showNextQuestion();
    buttonBlocked = false;
  }, 1500);
}
}

function gameOver(){
  document.getElementById("score").innerText = `Game Over! You scored ${score}/5,`;
}

/* Restart message and option */
function gameOver(){
  document.getElementById('question-holder').classList.add('hidden');
  document.getElementById("score").innerText = `Game Over! You scored ${score}/5, Click the start button to try again!`;
}

document.querySelectorAll("button.answer").forEach((button)=>{
  button.addEventListener("click", validateAnswer);
});


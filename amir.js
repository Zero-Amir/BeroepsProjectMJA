var questionBank = [
  {
    question: 'What is the name of the main character in God of war?',
    option: ['Deimos', 'Zeus', 'Kratos', 'Artreus'],
    answer: 'Kratos'
  },



  {
    question: 'Who is the first god that Kratos receives magic from?',
    option: ['Ares', 'Zeus', 'Athena', 'Poseidon'],
    answer: 'Poseidon'
  },

  {
    question: 'What is the creature called that Kratos is required by Posiedon to kill?',
    option: ['Hydra', 'Beast of the sea', 'Loch Ness', 'Ocean killer'],
    answer: 'Hydra'
  },




  {
    question: "What must you recover in order to open three doors within Pandora's Temple?",
    option: ['Keys', 'Fingers', 'Skulls', 'Daggers'],
    answer: 'Skulls'
  },

  {
    question: 'What is the final boss in the Challenge of Hades?',
    option: ['a  giant undead legionnaire', 'a giant Minotaur', 'Hades himself', 'a giant Cerberus'],
    answer: 'a giant Minotaur'
  },

  {
    question: 'Which god gives Kratos the power of Medusas Gaze?',
    option: ['Athena', 'Zeus', 'the Oracle of Athena', 'Aphrodite'],
    answer: 'Aphrodite'
  },
  {
    question: 'Who greets you before you pass through the Gates of Athens?',
    option: ['Zeus', 'Athena', 'The Oracle of Athens', 'the Cities Oracle'],
    answer: 'The Oracle of Athens'
  },
  {
    question: 'Before what challenge did Artemis give Kratos her blade?',
    option: ['Challenge of Atlas', 'Challenge of Zeus', 'Challenge of Artemis', 'Challenge of Hermes'],
    answer: 'Challenge of Atlas'

  },

  {
    question: 'What creature carries the Oracle of Athens away?',
    option: ['Harpies', 'Cerberus', 'Minotaur', 'Gorgons'],
    answer: 'Harpies'
  },
  {
    question: 'Who helps Kratos out of the underworld?',
    option: ['Athena', 'the Gravedigger', ' the oracle of Athens', 'a Spartan soldier'],
    answer: 'the Gravedigger'
  }
]
var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scoreboard = document.getElementById('scoreboard');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;
function displayQuestion() {
  for (var a = 0; a < span.length; a++) { span[a].style.background = 'none'; }
  question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
  option0.innerHTML = questionBank[i].option[0];
  option1.innerHTML = questionBank[i].option[1];
  option2.innerHTML = questionBank[i].option[2];
  option3.innerHTML = questionBank[i].option[3];
  stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
}
function calcScore(e) {
  if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
    score = score + 1;
    document.getElementById(e.id).style.background = 'limegreen';
  }
  else {
    document.getElementById(e.id).style.background = 'tomato';
  }
  setTimeout(nextQuestion, 500);
}
function nextQuestion() {
  if (i < questionBank.length - 1) {
    i = i + 1;
    displayQuestion();
  }
  else {
    points.innerHTML = score + '/' + questionBank.length;
    quizContainer.style.display = 'none';
    scoreboard.style.display = 'block'
  }
}

next.addEventListener('click', nextQuestion);
function backToQuiz() {
  location.reload();
}

function checkAnswer() {
  var answerBank = document.getElementById('answerBank');
  var answers = document.getElementById('answers');
  answerBank.style.display = 'block';
  scoreboard.style.display = 'none';
  for (var a = 0; a < questionBank.length; a++) {
    var list = document.createElement('li');
    list.innerHTML = questionBank[a].answer;
    answers.appendChild(list);
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
} function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
displayQuestion();
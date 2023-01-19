var myQuestions = [
    {
      question: "1.Kratos has white skin in the game. How did this happen?",
      answers: {
        A: ' he was born like that',
        B: 'he was involved in an accident as a boy',
        C: 'the ashes of his dead family were fastened to his skin',
        D: ' the ashes of many of his defeated foes were fastened to his skin'
      },
      correctAnswer: 'C'
    },

    {
      question: "2.Who is the first god that Kratos receives magic from?",
      answers: {
        A: 'Ares',
        B: 'Zeus',
        C: 'Athena',
        D: 'Poseidon'
      },
      correctAnswer: 'D'
    },

    {
      question: "3.What is the creature called that Kratos is required by Posiedon to kill?",
      answers: {
        A: 'Hydra',
        B: 'Beast of the sea',
        C: 'Loch Ness',
        D: 'Ocean killer'
      },
      correctAnswer: 'A'

    },

    {
      question: "4.What must you recover in order to open three doors within Pandora's Temple?",
      answers: {
        A: 'Keys',
        B: 'Fingers',
        C: 'Skulls',
        D: 'Daggers'
      },
      correctAnswer: 'C'
    },

    {
      question: "5.What is the final boss in the Challenge of Hades?",
      answers: {}
    }










  ];

  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
    
      var output = [];
      var answers;
  
    
      for(var i=0; i<questions.length; i++){
        
      
        answers = [];
  
        
        for(letter in questions[i].answers){
  
        
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
       
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
     
      var userAnswer = '';
      var numCorrect = 0;
      
      
      for(var i=0; i<questions.length; i++){
  
        
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
     
        if(userAnswer===questions[i].correctAnswer){
       
          numCorrect++;
          
         
          answerContainers[i].style.color = 'lightgreen';
        }
      
        else{
        
          answerContainers[i].style.color = 'red';
        }
      }
  

      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
  
    showQuestions(questions, quizContainer);
    
   
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
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
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
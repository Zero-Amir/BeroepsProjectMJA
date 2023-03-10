function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
} function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

//Question bankvar
 questionBank= [
    {
        question : 'Who is the first major incounter in the game as Batman?',
        option : ['Scarecrow','Poison Ivy','Arkham Knight','Pinguin'],
        answer : 'Poison Ivy'
    },
    {
        question : 'Which villan does not apear in the game?',
        option : ['Harley Quinn','Bane','Killer Croc','The Joker'],
        answer : 'Bane'
    },
    {
        question : 'Who did Scarecrow hire to build his gasbomb?',
        option : ['Lucius Fox','Simon Sagg','Alfred Pennyworth','Oracle'],
        answer : 'Simon Sagg'
    },
    {
        question : 'Who does batman team up with to take down Pinguin?',
        option : ['Nightwing','Robin','Alfred','Henry Adams'],
        answer : 'Nightwing'
    },
    {
        question : 'Whats Jokers biggest frear?',
        option : ['Losing respect','Being forgotten','Batman','Losing Harley Quinn'],
        answer : 'Being forgotten'
    },
    {
        question : 'How many Riddler trophies  can you collect?',
        option : ['269','420','243','251'],
        answer : '243'
    },
    {
        question : 'Which Joker clones kills other clones?',
        option : ['Henry Addams','Christina Bell','Jhonny Charisma','Albert Bell'],
        answer : 'Henry Addams'
    },
    {
        question : 'Who is the Narrator at the start of the game?',
        option : ['Lucius Fox','Bruce Wayne','Commisioner Gordon','Dick Gayson'],
        answer : 'Commisioner Gordon'
    },
    {
        question : 'Who helps Batman to neutralize Scarecrows toxin?',
        option : ['Penguin','Nightwing','Poison Ivy','Killer Corc'],
        answer : 'Poison Ivy'
    },
    {
        question : 'Who are the main villans?',
        option : ['Poison Ivy, Scarecrow and Bane','Scarecrow and Arkham Knight','Penguin, The Ridder and Joker','Catwoman and Arkham Knight'],
        answer : 'Scarecrow and Arkham Knight'
    },
    {
        question : 'Witch character is belived to have commited suicide?',
        option : ['Harley Quinn','Oracle','Scarecrow','Nightwing'],
        answer : 'Oracle'
    },
    {
        question : 'How many islands is the center of Gotham split into?',
        option : ['4','1','3','6'],
        answer : '3'
    },
    {
        question : 'Why is Joker always around Batman?',
        option : ['Infested with Scarecrows toxin','Due to Jokers blood in Batman','Both of the above','Joker isnt dead yet'],
        answer : 'Both of the above'
    },
    {
        question : 'Who do you have to save from The Riddler?',
        option : ['Catwoman','Robin','Oracle','Alfred'],
        answer : 'Catwoman'
    },
    {
        question : 'Who is the Arkham Knight?',
        option : ['Nightwing','The Joker','Jason Todd','Oracle'],
        answer : 'Jason Todd'
    },

]
var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function om de vragen te laten zien
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Question:'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question:"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function om de score te berekenen
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,700);
}

//function to calculate scores
function calcScore(e){      
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();
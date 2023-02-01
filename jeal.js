    //Vragen
    var questionBank= [
        {
            question : 'When was GTA V released?',
            option : ['2012','2015','2011','2013'],
            answer : '2013'
        },
        {
            question : 'In which region does GTA V take place?',
            option : ['Liberty City','Ohio','Los Santos','San Andreas'],
            answer : 'Los Santos'
        },
        {
            question : 'Who were the first crew members from the "Prologue" heist?',
            option : ['Trevor, Brad & Lester','Trevor, Michael and Brad','Franklin & Trevor','Trevor, Franklin & Lester'],
            answer : 'Trevor, Michael and Brad'
        },
        {
            question : 'Who gave Michael an oppurtunity for witnessed protection?',
            option : ['Dave Norton','Steve Haines','Lester','Devin Weston'],
            answer : 'Dave Norton'
        },
        {
            question : 'Which character is NOT featured in GTA V?',
            option : ['Karen Daniels','Johnny Klebitz','Niko Bellic','Patrick McReary'],
            answer : 'Niko Bellic'
        },
        {
            question : "What is Lamar's dog's name?",
            option : ['Chop','Lil Homie','Dawg','Chippy'],
            answer : 'Chop'
        },
        {
            question : 'What was the biggest heist that was pulled off in the Story Mode?',
            option : ['The Cayo Perico Heist','The Union Depository Heist','Fleeca Bank Job','The Diamond Casino Heist'],
            answer : 'The Union Depository Heist'
        },
        {
            question : 'Who is Denise Clinton?',
            option : ["Franklin's mother","Franklin's sister","Franklin's cousin","Franklin's aunt"],
            answer : "Franklin's aunt"
        },
        {
            question : 'Why does Trevor hate Michael?',
            option : ['Trevor just hates everyone.','Michael faked his death to take the money.','Trevor is jealous.','Trevor is just crazy.'],
            answer : 'Michael faked his death to take the money.'
        },
        {
            question : 'What did Michael ACTUALLY steal in the "Monkey Business" mission?',
            option : ['Neurotoxin Chemical Weapon','A cheap perfume recipe','Lean','Uranium'],
            answer : 'A cheap perfume recipe'
        },
        {
            question : 'Where did the first "Prologue" Heist take place?',
            option : ['Cayo Perico','North Yankton','Los Santos','Liberty City'],
            answer : 'North Yankton'
        },
        {
            question : "How many vehicles can you save inside Trevor's house?",
            option : ['2','3','1','4'],
            answer : '1'
        },
        {
            question : 'How many missions are there in total in GTA V?',
            option : ['69','1337','420','20'],
            answer : '69'
        },
        {
            question : 'Which Gang was Franklin in?',
            option : ['Madrazo Cartel','Los Santos Vagos','The Ballas','The Families'],
            answer : 'The Families'
        },
        {
            question : 'Who did you choose to kill at the end of the game?',
            option : ['I chose to kill Trevor.','I chose to kill Michael.','I chose the Deathwish.','No comment.'],
            answer : 'I chose the Deathwish.'
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

    //function om naar de volgende vraag te gaan
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

    //next button
    next.addEventListener('click',nextQuestion);

    //Back to Quiz button 
    function backToQuiz(){
        location.reload();
    }

    //function om de antwoorden na te kijken
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

    function openNav() {
         document.getElementById("mySidenav").style.width = "250px"; 
         document.getElementById("main").style.marginLeft = "250px"; 
         document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
         } 

    function closeNav() { 
        document.getElementById("mySidenav").style.width = "0"; 
        document.getElementById("main").style.marginLeft = "0"; 
        document.body.style.backgroundColor = "white"; 
    }
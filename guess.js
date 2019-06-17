//gAME INSPIRED BY http://www.javascriptsource.com/games/country-guessing-883281.html


//1.//select a random index from the country array, return the value of the element
var answer=pickAnswer();//pick a country as the answer
function pickAnswer(){//pick counrty from array
    var index=Math.floor(Math.random()*country.length);
    return country[index];
}
     
//1a. finds real length of a string without counting blank spaces.
var answerlength=findRealLength(answer);
function findRealLength(astring){
    realLength=0;
    for(var k=0; k<astring.length; k++){
        if(astring[k]!=' '){realLength+=1;}
    }
    
    return realLength; //returns true length
}//
//END OF HELP

var hints=new Array(4);//use the setHints() function

var score=0;//set score
var chances=3;

//1b.call to update info n begin game
showGui(); 

    var guess=document.getElementById('guess');//the text in placeholder
    var btnGuess=document.getElementById('btnGuess');//the guess gutton in index.html
    var btnClear=document.getElementById('btnClear');//the clear button in index.html
    var btnNew=document.getElementById('btnNew');//the new button in index.html
//2.by default, are GUESS and CLEAR button hidden
    var guesstext=guess.value;//the value in the guess text input in index.html
    btnGuess.style.display="none";//hide guess button and clear button by default
    btnClear.style.display="none";
     
//2a. if the player types in their guess, GUESS and CLEAR button is revealed
      guess.addEventListener("keyup",function(){//wait for player to type in the guess input field
        guesstext=guess.value;//set the guess text at the current value of the guess input
        if(guesstext.length>0){//if the player's guess is not blank, show the guess button and clear button
            btnGuess.style.display="block";
            btnClear.style.display="block";
            showGui(); //updates info
        }
//2b.If the player deletes all characters, the GUESS button is hidden
    else{
        btnGuess.style.display="none";//hide the guess button
    }//else
    },false);

//2c. if player hits CLEAR button, the GUESS and CLEAR button is hidden
    btnClear.addEventListener("click",function(){//wait for the player to click the clear button
        guess.value="";//set the guess input field as empty
        btnClear.style.display="none";//hide the clear button
        btnGuess.style.display="none";//hide the guess button
    },false);

//2d. if player clicks GUESS button
btnGuess.addEventListener("click",function(){//wait for the player to click the guess button
    checkGuess();//call function checkGuess()
},false);

//2e. player clicks on NEW button
    btnNew.addEventListener("click",function(){//wait for the player to click the new button
        newGame();//call function newGame()
    },false);
    function newGame(){//ask user if they want to start a new game
        if(window.confirm("Are you sure you want to start a new game?")==true){
            guess.value="";//clear the guess field
            window.location.reload();//refresh the page
        }

}


//Calls A,B,C,D,E
function showGui(){//show the interface
    setHints();//call setHints() function (A)
    showBlanks();//call the showBlanks() function (B)
    showHint();//call the showHint() function (C)
    showChances();//call the showChances() function (D)
    showScore();//call the showScore() function (E)
}
         // HINTS FROM :http://www.javascriptsource.com/games/country-guessing-883281.html
//(A) set hints using the answer for length, first and last letter
    function setHints(){
        hints[0]="Better luck next time.";//show if chances=0
        hints[1]="Country ends with "+answer[answer.length-1];//show if chances=1
        hints[2]="Country starts with "+answer[0];// shows if chances=2
        hints[3]="Country has "+answer.length+" letters";//show if chances are 3
    //check SHOWHINTS();var hint=hints[chances];set the current hint, based on how many chances are left
    } //END OF HINT BiZzness

        
//(B) shows the dashes and letters of the answer
  function showBlanks(){
    var str="";//save output as a string
    var showdash=true;
    
    if(chances>0){//if there are still chances left, show the dashes
        //window.alert(alertlength);
        for(var k=0; k<answer.length; k++){
            if(showdash==false){showdash=true;}
            if(answer[k]==' '){
                str+=" &nbsp; ";
            }//if
            else{
                if(chances<3 && k==0){
                    str+=" <u>"+answer[k]+"</u> &nbsp;";
                    showdash=false;
                }//
                if(chances<2 && k==answer.length-1){
                    str+=" <u>"+answer[k]+"</u> &nbsp;";
                    showdash=false;
                }//if
                if(showdash==true){str+=" <u> &nbsp; </u> &nbsp;";}
            }//else
        }//for
    }
//if there are no chances left, show the Answer
    else{
        for(var k=0; k<answer.length; k++){
            str+=" <u>"+answer[k]+"</u> &nbsp;";
        }//for
        btnClear.style.display="none";//hide the clear button
        btnGuess.style.display="none";//hide the guess button
        guess.style.display="none";//hide the guess input field
        btnNew.style.display="block"; //keeps the new button on site

    }//else
    document.getElementById('blankdiv').innerHTML=str;//show the string built from the loops above
}
//(C)
    function showHint(){
      //call answer to cheat show country
        var hint=hints[chances];//set the current hint, based on how many chances are left
        var pre="";//either 'Hint' or 'Sorry'
        if(chances>0){pre="Hint: ";}//still have chances left
      //no chances left
        else{pre="Sorry. ";}
        document.getElementById("hintdiv").innerHTML=pre+" <small>"+hint+"</small>";//show the hint
    }//END OF HELP

//(D) show how many chances player is left
    function showChances(){
        document.getElementById("chancediv").innerHTML="Chances: "+chances;
    }
//(E)
    function showScore(){//show the current score
        document.getElementById("scorediv").innerHTML="Score: "+score;
    }
//2dd. check to see if the user has guessed correctly/calls showGui to update values
    function checkGuess(){
        guesstext=guesstext.toUpperCase();//country array is in upper case, so change guess to uppercase
        if(guesstext==answer){//if the guess was correct
            answer=pickAnswer();//find a new answer
            chances=3; score+=10; guess.value="";//reset chances to 3, add 10 to score and clear guess input field
            alert(guesstext+"! You're right!");//congratulate the user
        }
        else{chances-=1; guess.value="";//guess is not correct, subtract one chance and clear the input field
            if(chances>0){alert("Nope. Try again.");}//if there are chances left, ask user to try again
        }
        showGui();// turns on the engine and updates info
    }

/*CHALLENGE 6
 1. A player looses his ENTIRE score when he rolls two 6 in a row.After that, it's the next 
    player's turn. (HINT: Always save the previous dice roll in a separate variable).
 2. Add an input field to the HTML where players can set the winning score, so that they can change the
    predefined score 100, (HINT: you can read that value with the .value property in javascript. This is a 
        good oppurtunity to use google to figure this out)
 3. Add another dice to the game, so that there are two dices now. The player looses his current score when 
    one of them is a 1. (HINT: you will need CSS to position the second dice, so take a look at the CSS code
        for the first one.)       
 */

var scores, roundScore, activePlayer, gamePlaying;

function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    score0 = document.getElementById('score--0');
    score1 = document.getElementById('score--1');
    current0 = document.getElementById('current--0');
    current1 = document.getElementById('current--1');
    score0.textContent = '0';
    score1.textContent = '0';
    current0.textContent = '0';
    current1.textContent = '0';
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    document.querySelector('.player--0').classList.remove('winner');
    document.querySelector('.player--1').classList.remove('winner');
    document.querySelector('.player--0').classList.remove('active');
    document.querySelector('.player--1').classList.remove('active');  
    document.querySelector('.player--0').classList.add('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
 } 

 init();

 function nextPlayer(){
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    // if(activePlayer === 0){
    //     activePlayer = 1;
    // }else{
    //     activePlayer = 0;
    // }
    roundScore = 0;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    // document.querySelector('.player player--0').classList.remove('player--active');
    // document.querySelector('.player player--1').classList.add('player--active');
    /* classList is used to add, remove and toggle classes. */
}

 var lastDice;
 document.querySelector('.btn--roll').addEventListener('click', function() {
     if(gamePlaying){
        var dice1 = Math.floor(Math.random()*6) + 1;
        var dice2 = Math.floor(Math.random()*6) + 1;
        console.log(dice1, dice2);

        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1+ '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2+ '.png';

        if(dice1 >1 && dice2>1) {
            roundScore +=dice1 + dice2 ;
            document.querySelector('#current--' + activePlayer).textContent = roundScore; 
        }else{
            //next player
            nextPlayer();
        }
     }

    //     if (dice === 6 && lastDice === 6){
    //         scores[activePlayer] = 0;
    //         document.querySelector('#score--' + activePlayer).textContent = '0';
    //         nextPlayer();
    //     }
    //     //update the round score if the rolled number was not a 1
    //     else if(dice >1) {
    //         roundScore +=dice ;
    //         document.querySelector('#current--' + activePlayer).textContent = roundScore; 
    //     }else{
    //         //next player
    //         nextPlayer();
    //     }

    //     lastDice = dice;
    //  }
 });

 document.querySelector('.btn--hold').addEventListener('click',function(){
     if(gamePlaying){
            //add current score to global score
    scores[activePlayer] += roundScore ;

    //Update the UI
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
    var input = document.querySelector('.final-score').value;
    var winningScore;
    //Undefined, 0, null or "" are coerced to false
    //Anything else is coerced to true
    if(input){
        winningScore = input;
    }else{
        winningScore = 100;
    }
 
    //Check if player won the game
    if(scores[activePlayer] >= winningScore){
        document.querySelector('#name--' + activePlayer).textContent = 'Winner!!';
        document.querySelector('.dice-1').style.display = 'none';
        document.querySelector('.dice-2').style.display = 'none';
        document.querySelector('.player--' +activePlayer).classList.add('player--winner');
        document.querySelector('.player--' +activePlayer).classList.remove('player--active');
        gamePlaying = false;
    }else{
         //Next player by pressing hold
         nextPlayer();    
    }
     }
 });

 document.querySelector('.btn--new').addEventListener('click', init());


 //document.querySelector('#current--' + activePlayer).textContent = dice;
//document.querySelector('#current--' + activePlayer).innerHTML = '<em>' +dice+ '<em>';
//var x = document.querySelector('#score--' + activePlayer).textContent  ;


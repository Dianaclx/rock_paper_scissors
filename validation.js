var userchoice = prompt('Choose rock, paper or scissors!');
var computerchoice =  prompt('Computer choose' + computerplay());
var result = winner();
function computerplay(computerchoice) {
    let pick = Math.floor(Math.random() * 3);
    switch (pick){
        case 0:
            return ROCK; 
        case 1: 
            return PAPER;
        case 2:
            return SCISSORS;       
    }
}

function winner(result){
    if ( userchoice === computerchoice){
        return 'Draw';
    } else if ( 
        userchoice === ROCK && computerchoice === SCISSORS ||
        userchoice === PAPER && computerchoice === ROCK ||
        userchoice === SCISSORS && computerchoice == PAPER){
            return 'YOU WON!';
        } else( 
            computerchoice === ROCK && userchoice === SCISSORS ||
            computerchoice === PAPER && userchoice === ROCK ||
            computerchoice === SCISSORS && userchoice === PAPER) {
                return 'YOU LOST!';
            }
}
//let computerMove = `kamień`;
//let playerMove = `papier`; 
//printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to ' + playerMove + ', to wygrywasz!');

/* if(randomNumber == 1){
  computerMove = 'kamień';
}   else if(randomNumber == 2){
        computerMove = 'papier';
}   else {
        computerMove = 'nożyce';
}  
if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
    playerMove = 'papier';
} else if(playerInput == '3'){ //dodanie trzeciego warunku else if dlatego że jeśli gracz wpisze coś innego niż 1, 2, 3 to niech wyświetli się komunikat "nieznany ruch"
    playerMove = 'nożyce';
}

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  } else if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } else if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ty przegrywasz!');
  } else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ty przegrywasz!');
  } else if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ty przegrywasz!');
  } else if( computerMove == playerMove){
    printMessage('Remis!');
  } else {
    printMessage('Nieznany ruch!');
  }

//printMessage('Mój ruch to: ' + argComputerMove);

printMessage('Twój ruch to: ' + argPlayerMove);
console.log('moves:', argComputerMove, argPlayerMove);
*/

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let argComputerMove = getMoveName(randomNumber);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let argPlayerMove = getMoveName(playerInput);

console.log('Wybór komputer i gracz:', argComputerMove, argPlayerMove);
printMessage(displayResult(argComputerMove, argPlayerMove));
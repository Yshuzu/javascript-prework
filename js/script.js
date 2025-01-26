//let computerMove = `kamień`;
//let playerMove = `papier`; 
//printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to ' + playerMove + ', to wygrywasz!');

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}   else if(randomNumber == 2){
        computerMove = 'papier';
}   else {
        computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
    playerMove = 'papier';
} else if(playerInput == '3'){ //dodanie trzeciego warunku else if dlatego że jeśli gracz wpisze coś innego niż 1, 2, 3 to niech wyświetli się komunikat "nieznany ruch"
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);
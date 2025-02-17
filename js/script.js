{
const getMoveName = (argMoveId) => {
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
}

const displayResult = (argComputerMove, argPlayerMove) =>{
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      return('Ty wygrywasz!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        return('Ty wygrywasz!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        return('Ty wygrywasz!');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        return('Ty przegrywasz!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        return('Ty przegrywasz!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        return('Ty przegrywasz!');
    } else if( argComputerMove == argPlayerMove){
        return('Remis!');
    } else {
        return('Nieznany ruch!');
    }
}

const playGame = (playerInput) => {
    // clearMessages();
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    const argComputerMove = getMoveName(randomNumber);

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput);
    const argPlayerMove = getMoveName(playerInput);

    console.log('Wybór komputer i gracz:', argComputerMove, argPlayerMove);
    printMessage(displayResult(argComputerMove, argPlayerMove));
}

document.getElementById('play-rock').addEventListener('click', () => {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', () => {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', () => {
    playGame(3);
});
}
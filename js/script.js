function playGame(playerInput){
    // clearMessages();
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let argComputerMove = getMoveName(randomNumber);

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput);
    let argPlayerMove = getMoveName(playerInput);

    console.log('Wybór komputer i gracz:', argComputerMove, argPlayerMove);
    printMessage(displayResult(argComputerMove, argPlayerMove));
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});


function getMoveName(argMoveId){
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

function displayResult(argComputerMove, argPlayerMove){
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

// funkcje się znajdowały w pliku functions.js, ale zostały przeniesione do pliku script.js, ponieważ tam są wywoływane. 

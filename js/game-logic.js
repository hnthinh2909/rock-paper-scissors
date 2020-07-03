// All code should be written in this file.
let playerOneMoveOneType, playerOneMoveOneValue,
    playerOneMoveTwoType, playerOneMoveTwoValue,
    playerOneMoveThreeType, playerOneMoveThreeValue,
    playerTwoMoveOneType, playerTwoMoveOneValue,
    playerTwoMoveTwoType, playerTwoMoveTwoValue,
    playerTwoMoveThreeType, playerTwoMoveThreeValue,
    playerOneWins, playerTwoWins;

// create setPlayerMoves() and pass in parameters is player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue.
const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if(!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue) {
        return;
    }

    if(!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)) {
        return;
    }

    if(!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) || !isValidMoveValue(moveThreeValue)) {
        return;
    }

    if((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
        return;
    }

    if(player === 'Player One') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    }
    else if (player === 'Player Two') {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    }
};

// Create helper with function isValidMoveType with params is moveType to validate value of 'rock', 'paper', 'scissors'.
const isValidMoveType = (moveType) => {
    return (moveType === 'rock') || (moveType === 'paper') || (moveType === 'scissors');
};

// Create help function isValidMoveValue accept argument of moveValue and check that it is >= 1 and <= 99;
const isValidMoveValue = (moveValue) => {
    return (moveValue >= 1 ) && (moveValue <= 99);
}

const getRoundWinner = (roundNumber) => {
    // create switch statement that takes param roundNumber that checks for a matching case of 1, 2, 3
    switch(roundNumber) {
        case 1:
            return getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue);
        case 2:
            return getMoveWinner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue);
        case 3:
            return getMoveWinner(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);
        default:
            return null;
    }
};

const getMoveWinner = (playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) => {
    
    if(!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue) {
        return null;
    }

    if(playerOneMoveType === playerTwoMoveType) {
        if(playerOneMoveValue > playerTwoMoveValue) {
            return 'Player One';
        }
        else if(playerOneMoveValue < playerTwoMoveValue) {
            return 'Player Two';
        }
        else {
            return 'Tie';
        }
    }

    if (playerOneMoveType === 'rock') {
        if(playerTwoMoveType === 'scissors') {
            return 'Player One';
        }
        else {
            return 'Player Two';
        }
    }
    else if (playerOneMoveType === 'paper') {
        if(playerTwoMoveType === 'rock') {
            return 'Player One';
        }
        else {
            return 'Player Two';
        }
    }
    else {
        if(playerTwoMoveType === 'paper') {
            return 'Player One';
        }
        else {
            return 'Player Two';
        }
    }
};

const getGameWinner = () => {
    if(!playerOneMoveOneType || !playerOneMoveOneValue || !playerOneMoveTwoType|| !playerOneMoveTwoValue || !playerOneMoveThreeType || !playerOneMoveThreeValue
    || !playerTwoMoveOneType || !playerTwoMoveOneType || !playerTwoMoveTwoType|| !playerTwoMoveTwoValue || !playerTwoMoveThreeType || !playerTwoMoveThreeValue) {
        return null;
    };

    playerOneWins = 0;
    playerTwoWins = 0;

    const roundOneWinner = getRoundWinner(1);
    const roundTwoWinner = getRoundWinner(2);
    const roundThreeWinner = getRoundWinner(3);

    addWin(roundOneWinner);
    addWin(roundTwoWinner);
    addWin(roundThreeWinner);

    if (playerOneWins > playerTwoWins) {
        return 'Player One';
    }
    else if(playerOneWins < playerTwoWins) {
        return 'Player Two';
    }
    else {
        return 'Tie';
    }
};

const addWin = (winner) => {
    if(winner === 'Player One') {
        playerOneWins = (playerOneWins + 1) || 1;
    } 
    else if(winner === 'Player Two') {
        playerTwoWins = (playerTwoWins + 1) || 1;
    }
};

const setComputerMoves = () => {
    const moves = ['rock', 'paper', 'scissors'];

    const moveOneType = moves[Math.floor(Math.random()*3)];
    const moveTwoType = moves[Math.floor(Math.random()*3)];
    const moveThreeType = moves[Math.floor(Math.random()*3)];
    
    const moveOneValue = Math.floor(Math.random()*96) + 1;
    const moveTwoValue = Math.floor(Math.random()*(96-moveOneValue)) + 1;
    const moveThreeValue = 99 - moveOneValue - moveTwoValue;

    setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue);
};
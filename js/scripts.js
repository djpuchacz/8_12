var pickRock = document.getElementById('js-playerPick_rock'),
	pickPaper = document.getElementById('js-playerPick_paper'),
	pickScissors = document.getElementById('js-playerPick_scissors');

	pickRock.addEventListener('click', function() { playerPick('rock') }),
	pickPaper.addEventListener('click', function() { playerPick('paper') }),
	pickScissors.addEventListener('click', function() { playerPick('scissors') });

var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };
var newGameElem = document.getElementById('js-newGameElement'),
	pickElem = document.getElementById('js-playerPickElement'),
	resultsElem = document.getElementById('js-resultsTableElement');
	
function setGameElements() {
	switch(gameState) {
		case 'started':
			newGameElem.style.display = 'none';
			pickElem.style.display = 'block';
			resultsElem.style.display = 'block';
			break;
		case 'ended':
			newGameBtn.innerText = 'Jeszcze raz';
		case 'notStarted':
		default:
			newGameElem.style.display = 'block';
			pickElem.style.display = 'none';
			resultsElem.style.display = 'none';
	}
}
setGameElements();

var newGameBtn = document.getElementById('js-newGameButton');
newGameBtn.addEventListener('click', newGame);
var playerPointsElem = document.getElementById('js-playerPoints');
var playerNameElem = document.getElementById('js-playerName');
var computerPointsElem = document.getElementById('js-computerPoints');
	
function newGame() {
	player.name = prompt('Graczu, wpisz swoje imię', 'imię gracza');
	playerNameElem.innerHTML = player.name;
	
	if (player.name) {
		player.score = computer.score = 0;
		gameState = 'started';
		setGameElements();
		setGamePoints();

		playerNameElem.innerHTML = player.name;
		setGamePoints();
	}

}	


var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

	

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;	
	checkRoundWinner(playerPick, computerPick);
}

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}	

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'none'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {
        
        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Wygrana!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Wygrana!";
        computer.score++;
    }
	setGamePoints();
	
	if (player.score == 10 || computer.score == 10) {
		gameState='ended';
		setGameElements();
		showWinnerInfo();
	}

}
function showWinnerInfo(){
	if(player.score == 10) {
		alert('Wygrałeś');
	} else {
		alert('Wygrał komputer');
	}
}


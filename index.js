function renderPage(){
  let gameboard = [
    '0','1','2',
    '3','4','5',
    '6','7','8',
  ];

  let isGameFinished = false;
  let isPlayerTwoTurn = false;

  // start button eventlistener
  const startButton = document.querySelector('.startGame');
  startButton.addEventListener('click',()=>{
    startButton.disabled = true; 
    let players = createPlayers();
    startGame(players);
  });

  function winningCondition(playerSym,playerName){
    if ((gameboard[0]=== playerSym) && (gameboard[1]=== playerSym) && (gameboard[2]=== playerSym)){
      isGameFinished = true;
      checkGameFinished(playerName)
      isGameFinished = false;
      console.log('winning!')
    }
    if ((gameboard[3]=== playerSym) && (gameboard[4]=== playerSym) && (gameboard[5]=== playerSym)){
      isGameFinished = true;
      checkGameFinished(playerName)
      isGameFinished = false;
      console.log('winning!')
    }
    if ((gameboard[6]=== playerSym) && (gameboard[7]=== playerSym) && (gameboard[8]=== playerSym)){
      isGameFinished = true;
      checkGameFinished(playerName)
      isGameFinished = false;
      console.log('winning!')
    }
    if ((gameboard[0]=== playerSym) && (gameboard[3]=== playerSym) && (gameboard[6]=== playerSym)){
      isGameFinished = true;
      checkGameFinished(playerName)
      isGameFinished = false;
      console.log('winning!')
    }
    if ((gameboard[1]=== playerSym) && (gameboard[4]===playerSym) && (gameboard[7]=== playerSym)){
      isGameFinished = true;
      checkGameFinished(playerName)
      isGameFinished = false;
      console.log('winning!')
    }
    if ((gameboard[2]=== playerSym) && (gameboard[5]=== playerSym) && (gameboard[8]=== playerSym)){
      isGameFinished = true;
      checkGameFinished(playerName)
      isGameFinished = false;
      console.log('winning!')
    }
    if ((gameboard[0]=== playerSym) && (gameboard[4]=== playerSym) && (gameboard[8]=== playerSym)){
      isGameFinished = true;
      checkGameFinished(playerName)
      isGameFinished = false;
      console.log('winning!')
    }
    if ((gameboard[2]=== playerSym) && (gameboard[4]=== playerSym) && (gameboard[6]=== playerSym)){
      isGameFinished = true;
      checkGameFinished(playerName)
      isGameFinished = false;
      console.log('winning!')
    }
  }

  function checkGameFinished(winningPlayer){
    const winningDialog = document.querySelector('.winningDialog');
    if (isGameFinished){
      winningDialog.showModal();
    }
    const txtPlayerName = document.querySelector('.playerName');
    txtPlayerName.innerHTML = `The Winner is: ${winningPlayer}!`;
    const closeDialogButton = document.querySelector('.closeDialogButton');
    closeDialogButton.addEventListener('click',()=>{
      winningDialog.close();
      isPlayerTwoTurn = false;
      startButton.disabled = false;
      startGame();
    })
  }

  function createPlayers(){
    const playerOneElem = document.querySelector('#playerOne');
    const playerOneName  = playerOneElem.value;
    const playerOneSelect = document.querySelector('#playerOneSym');
    const playerOneSym = playerOneSelect.value;
    
    const playerTwoElem = document.querySelector('#playerTwo');
    const playerTwoName  = playerTwoElem.value;
    const playerTwoSelect = document.querySelector('#playerTwoSym');
    const playerTwoSym = playerTwoSelect.value;
    
    const playerOne =
    {
      playerOneName,
      playerOneSym,
    }
    const playerTwo =
    {
      playerTwoName,
      playerTwoSym,
    }
    return {playerOne,playerTwo};
  };


  let cells = document.querySelectorAll('.cell');
  cells = [...cells];

  function startGame(players){
    gameboard = [
      '0','1','2',
      '3','4','5',
      '6','7','8',
    ];
    cells.forEach(cell=>{
      cell.innerHTML = '';
    })

    gameboard.forEach(data=>{
      const dataIndex = gameboard.indexOf(data);

      cells.forEach(cell=>{
        const cellIndex = cells.indexOf(cell);
        if (cellIndex === dataIndex){
          cell.addEventListener('click',function handleClick(){
            console.log(players);
            if (isPlayerTwoTurn){
              console.log(players);
              gameboard[cellIndex] = players.playerTwo.playerTwoSym;
              cell.innerHTML = players.playerTwo.playerTwoSym;
              isPlayerTwoTurn = !isPlayerTwoTurn;
              winningCondition(players.playerTwo.playerTwoSym,players.playerTwo.playerTwoName);
              console.log(gameboard);
              cell.removeEventListener('click',handleClick);
            }
            else{   
              console.log(players);
              gameboard[cellIndex] = players.playerOne.playerOneSym;
              cell.innerHTML = players.playerOne.playerOneSym;
              isPlayerTwoTurn = !isPlayerTwoTurn;
              winningCondition(players.playerOne.playerOneSym,players.playerOne.playerOneName);
              console.log(gameboard);
              cell.removeEventListener('click',handleClick);
            };
          })
        }
      })
    })
  }
};
renderPage()
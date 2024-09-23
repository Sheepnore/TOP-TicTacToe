function renderPage(){
  const gameboard = [
    '0','1','2',
    '3','4','5',
    '6','7','8',
  ];

  
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
  
  let isPlayerTwoTurn = false;
  let players;
  const startButton = document.querySelector('.startGame');
  startButton.addEventListener('click',()=>{
     players = createPlayers();
     console.log(players);
     console.log(players.playerOne.playerOneSym);
     startGame();
  });


  let cells = document.querySelectorAll('.cell');
  cells = [...cells];

  // function disableClickEvent(cell){
  //   if (cell.innerHTML !== ''){
  //     cell.removeEventListener('click',handleClick);
  //   };
  // };

  function startGame(){
    gameboard.forEach(data=>{
      const dataIndex = gameboard.indexOf(data);
      console.log(dataIndex);

      cells.forEach(cell=>{
        const cellIndex = cells.indexOf(cell);
        if (cellIndex === dataIndex){
          cell.addEventListener('click',function handleClick(){
            if (isPlayerTwoTurn){
              gameboard[cellIndex] = players.playerTwo.playerTwoSym;
              cell.innerHTML = players.playerTwo.playerTwoSym;
              isPlayerTwoTurn = !isPlayerTwoTurn;
              cell.removeEventListener('click',handleClick);
            }
            else{
              gameboard[cellIndex] = players.playerOne.playerOneSym;
              cell.innerHTML = players.playerOne.playerOneSym;
              isPlayerTwoTurn = !isPlayerTwoTurn;
              cell.removeEventListener('click',handleClick);
            };
          })
        }
      })
    })
    
  }

  

};
renderPage()
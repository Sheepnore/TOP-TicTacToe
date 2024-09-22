function renderPage(){
  const gameboard = [
    '0','1','2',
    '3','4','5',
    '6','7','8',
  ];

  let cells = document.querySelectorAll('.cell');
  cells = [...cells];

  gameboard.forEach(data=>{
    const dataIndex = gameboard.indexOf(data);
    console.log(dataIndex);
    cells.forEach(cell=>{
      const cellIndex = cells.indexOf(cell);
      if (cellIndex === dataIndex){
        cell.addEventListener('click',()=>{
          gameboard[cellIndex] = 'X';
          console.log(gameboard);
        })
      }
    })
  })
  


  // cells.forEach(cell=>{
  //   cell.addEventListener('click',()=>{
  //     console.log('X');
  //   });
  // });

  function startGame(){
    const startButton = document.querySelector('.startGame');
    startButton.addEventListener('click',()=>{
      createPlayers();
    })
  }
  startGame();

  function createPlayers(){
    const playerOneElem = document.querySelector('#playerOne');
    const playerOneName  = playerOneElem.value;
    const playerOneSelect = document.querySelector('#playerOneSym');
    const playerOneSym = playerOneSelect.value;

    const playerTwoElem = document.querySelector('#playerTwo');
    const playerTwoName  = playerTwoElem.value;
    const playerTwoSelect = document.querySelector('#playerTwoSym');
    const playerTwoSym = playerTwoSelect.value;


    const players = [
      {playerOneName,
        playerOneSym
      },
      {
        playerTwoName,
        playerTwoSym,
      }
    ]
    console.log(players);
    return {players};
  };



};
renderPage()
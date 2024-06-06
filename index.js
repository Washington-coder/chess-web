const BOARD_SIZE = 8;

function createSquare(i, j) {
    let square = document.createElement('div');
    const squareColor = ((i % 2 === 0) && (j % 2 === 0)) || ((i % 2 !== 0) && (j % 2 !== 0)) ? 'white' : 'black';

    square.id = 'square';
    square.className = 'square';
    square.style.backgroundColor = squareColor;
    
    return square;
}

function addSquaresToRow(line, i, j) {
    let td = document.createElement('td');
    td.appendChild(createSquare(i, j));
    line.appendChild(td);
}

function displayBoardSquares(table) {
    for (let i = 0; i < BOARD_SIZE; i++) {
        let line = document.createElement('tr');
        for (let j = 0; j < BOARD_SIZE; j++) {
            addSquaresToRow(line, i, j);
        }
        table.appendChild(line);
    }
}

let table = document.createElement('table');
displayBoardSquares(table);

document.getElementById('board').appendChild(table);


let color = 'black';
retrieveInput();

let resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', function(e){
    reset();
});

let resizeButton = document.getElementById('resize-button');
resizeButton.addEventListener('click', function(e) {
    removeGrid();
    retrieveInput();
});

let toggleEraser = document.getElementById('eraser-toggle');
toggleEraser.addEventListener('click', function(e) {
    color = 'eraser';
});

let toggleBlack = document.getElementById('black-toggle');
toggleBlack.addEventListener('click', function(e) {
    color = 'black';
});

let toggleRainbow = document.getElementById('rainbow-toggle');
toggleRainbow.addEventListener('click', function(e) {
    color = 'rainbow';
});

function generateGrid(size) {
    for (let i = 0; i < size; ++i){
        var row = document.createElement('div');
        row.className = 'row';
        for (let i = 0; i < size; ++i){
            let cell = document.createElement('div');
            cell.className = 'cell';
            row.appendChild(cell);
            cell.addEventListener('mouseover', colorGrid);
        }
        document.getElementById('grid-container').appendChild(row);
    }
}

function removeGrid() {
    let rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.remove();
    });
}

function retrieveInput() {
    let size = 0;
    while ((size <= 0) || (size > 100) || (isNaN(size))){
        size = parseInt(prompt("Enter a number between 1 and 100."));
    }
    generateGrid(size);
}

function colorGrid() {
    switch (color){
        case 'black':
            this.style.backgroundColor = '#000000';
            break;
        case 'eraser':
            this.style.backgroundColor = '#FFFFFF';
            break;
        case 'rainbow':
            let randColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            this.style.backgroundColor = randColor;
            break;
    }
}

function reset() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
            cell.style.backgroundColor = "#FFFFFF";
    });
}
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

function generateGrid(size) {
    for (let i = 0; i < size; ++i){
        var row = document.createElement('div');
        row.className = 'row';
        for (let i = 0; i < size; ++i){
            let cell = document.createElement('div');
            cell.className = 'cell';
            addCellListener(cell);
            row.appendChild(cell);
        }
        document.getElementById('grid-container').appendChild(row);
    }
}

function removeGrid() {
    let rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.remove();
    })
}

function retrieveInput() {
    let size = 0;
    while ((size <= 0) || (size > 100)){
        size = parseInt(prompt("Enter a number between 1 and 100."));
    }
    generateGrid(size);
}

function addCellListener(cell) {
    cell.addEventListener('mouseover', function(e){
        cell.classList.add('colored-cell')
    });
}

function reset() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.classList.remove('colored-cell');
    });
}
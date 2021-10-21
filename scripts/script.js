const container = document.querySelector('.container');
const reset = document.querySelector('.reset');
const newGrid = document.querySelector('.newGrid');


let grid = document.querySelectorAll('.unit');
startGrid();
// grid.forEach(grid => grid.addEventListener('mouseenter', changeColor));
reset.addEventListener('click', clear);
newGrid.addEventListener('click', createGrid);

function startGrid() {
    for (let i = 0; i < 256; i++) {
        let div = document.createElement('div');
        // div.textContent = "X";
        div.style.width = '60px';
        div.style.height = '60px';
        div.classList.add('unit');
        container.appendChild(div);
    }
    grid = document.querySelectorAll('.unit');
    grid.forEach(grid => grid.addEventListener('mouseenter', changeColor));
}

function deleteGrid() {
    for (let i = 0; i < grid.length; i++) {
        grid[i].remove();
    }
}

function createGrid(e) {
    deleteGrid();
    let side = Number(prompt("How many squares per side?"));
    if (side > 100 || side <= 0) {
        side = Number(prompt("Please choose a number between 1 and 200:"));
    }
    let area = side * side;
    let squareSize = Math.floor(960 / side);
    for (let i = 0; i < area; i++) {
        let div = document.createElement('div');
        div.classList.add('unit');
        div.style.width = squareSize + 'px';
        div.style.height = squareSize + 'px';
        div.classList.add('unit');
        container.appendChild(div);
    }
    grid = document.querySelectorAll('.unit');
    grid.forEach(grid => grid.addEventListener('mouseenter', changeColor));
}

function changeColor(e) {
    let red = Math.floor((Math.random() * 256) + 1);
    let blue = Math.floor((Math.random() * 256) + 1);
    let green = Math.floor((Math.random() * 256) + 1);
    e.target.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
    // e.target.textContent = `${red}, ${blue}, ${green}`;
}

function clear() {
    for(let i = 0; i < grid.length; i++) {
        grid[i].textContent = '';
        grid[i].style.backgroundColor = 'white';
    }
}
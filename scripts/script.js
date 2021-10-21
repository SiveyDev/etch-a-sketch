const container = document.querySelector('.container');
const btn = document.querySelector('button');

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    // div.textContent = "X";
    div.classList.add('unit');
    container.appendChild(div);
}

const grid = document.querySelectorAll('.unit');

grid.forEach(grid => grid.addEventListener('mouseenter', changeColor));
btn.addEventListener('click', clear);

function changeColor(e) {
    let red = Math.floor((Math.random() * 256) + 1);
    let blue = Math.floor((Math.random() * 256) + 1);
    let green = Math.floor((Math.random() * 256) + 1);
    e.target.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
    e.target.textContent = `${red}, ${blue}, ${green}`;
}

function clear() {
    for(let i = 0; i < grid.length; i++) {
        grid[i].textContent = '';
        grid[i].style.backgroundColor = 'white';
    }
}

// for (let i = 0; i < grid.length; i++) {
//     let red = Math.floor((Math.random() * 256) + 1);
//     let blue = Math.floor((Math.random() * 256) + 1);
//     let green = Math.floor((Math.random() * 256) + 1);

//     grid[i].style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
// }
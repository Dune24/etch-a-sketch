const container = document.querySelector('#container');
const createGridBtn = document.querySelector('#create-grid');

function drawGrid (num, color) {
    container.innerHTML = "";
    
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            const squareDiv = document.createElement('div');
            
            squareDiv.classList.add('square');
            squareDiv.addEventListener('mouseover', () => {
                (color == 'random') ? squareDiv.style.backgroundColor = randomColor() 
                                    : squareDiv.style.backgroundColor = color;
        });
            
            container.appendChild(squareDiv);
        }
    }
    container.style['grid-template-columns'] = `repeat(${num}, 1fr)`;
}

function randomColor() {
    return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
}

createGridBtn.addEventListener('click', () => {
    let squaresPerSide = prompt('Please enter the number of squares per side of the grid:', 16);
    let squaresColor = prompt('Which color do you want to have? For example: random, green, yellow', 'random');
    squaresColor.toLowerCase();
    drawGrid(squaresPerSide, squaresColor);
});
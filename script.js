const container = document.querySelector('#container');
const createGridBtn = document.querySelector('#create-grid');
function drawGrid () {
    for (let i = 1; i <= 16; i++) {
        for (let j = 1; j <= 16; j++) {
            const squareDiv = document.createElement('div');
            squareDiv.classList.add('square');
            squareDiv.addEventListener('mouseover', () => {
                squareDiv.style.backgroundColor = 'blue';
        });
            container.appendChild(squareDiv);
        }
    }
  createGridBtn.removeEventListener('click', drawGrid);
}


createGridBtn.addEventListener('click', drawGrid);

/*
const allSquareDivs = document.querySelectorAll('.square');
allSquareDivs.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
       div.style.backgroundColor = 'red';
  })
})
*/
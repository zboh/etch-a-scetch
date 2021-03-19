const playArea = document.createElement('div');
playArea.classList.add('d-flex', 'align-items-center', 'justify-content-center', 'flex-wrap', 'playArea');
const wrapper = document.querySelector('#playAreaWrapper');
wrapper.appendChild(playArea);
const gridHight = 36;
const gridWidth = 36;
const gridSize = gridHight * gridWidth;
const brushColor = 'white';

// HERO text
const heroTextWrapper = document.createElement('div');
const heroText = document.createElement('div');
heroText.classList.add('heroText');
heroText.innerText = 'Etch-a-scetch';
heroTextWrapper.appendChild(heroText);
playArea.appendChild(heroTextWrapper);


// COLOR picker 
const colorInput = document.createElement('input');
colorInput.setAttribute('type', 'color');
colorInput.setAttribute('id', 'colorInput');
colorInput.setAttribute('name', 'colorInput');
colorInput.setAttribute('value', 'brushColor');

const inputLabel = document.createElement('label');
inputLabel.setAttribute('for', 'colorInput');
inputLabel.innerText = "Pick a color";





function createGrid2(height, width) {
	
	for(let i = 0; i < height; i++){	
		let gridRow = document.createElement('div');
		gridRow.classList.add('gridRow', 'd-flex');
		for (let j = 0; j < width; j++) {
			let gridUnit = document.createElement('div');
			gridUnit.classList.add('gridUnit');
			gridUnit.addEventListener("mouseover", function( event ) {
				// highlight the mouseover target
				event.target.style.backgroundColor = `${brushColor}`;
			}, false);
			let gridUnitWidth = playArea.clientWidth / gridWidth;
			console.log(playArea.clientWidth);
			gridUnit.style.width = gridUnitWidth + 'px';
			gridUnit.style.height = gridUnitWidth + 'px';
			// gridUnit.innerText = j;
			gridRow.appendChild(gridUnit);
		}		
		playArea.appendChild(gridRow);	
	}		
	console.log(playArea.clientWidth);	
}

createGrid2(gridHight, gridWidth);
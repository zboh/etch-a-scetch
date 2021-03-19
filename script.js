const playArea = document.createElement('div');
playArea.classList.add('d-flex', 'align-items-center', 'justify-content-center', 'flex-wrap', 'playArea');
const wrapper = document.querySelector('#playAreaWrapper');
wrapper.appendChild(playArea);
const gridHight = 36;
const gridWidth = 36;
const gridSize = gridHight * gridWidth;


function createGrid2(height, width) {
	
	for(let i = 0; i < height; i++){	
		let gridRow = document.createElement('div');
		gridRow.classList.add('gridRow', 'd-flex');
		for (let j = 0; j < width; j++) {
			let gridUnit = document.createElement('div');
			gridUnit.classList.add('gridUnit');
			let gridUnitWidth = playArea.clientWidth / gridWidth;
			console.log(playArea.clientWidth);
			gridUnit.style.width = gridUnitWidth + 'px';
			gridUnit.style.height = gridUnitWidth + 'px';
			gridUnit.innerText = j;
			gridRow.appendChild(gridUnit);
		}		
		playArea.appendChild(gridRow);
	}			
}

createGrid2(gridHight, gridWidth);
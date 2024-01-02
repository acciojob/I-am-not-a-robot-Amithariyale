//your code here
const images=document.querySelectorAll('img');
let selectedImgs=[];

for(let i=0;i<images.length;i++){
	images[i].addEventListener('click',selectImg);
}

function selectImg(e) {
	e.target.classList.add('selected');
	selectedImgs.push(e.target.className);
	if(selectedImgs.length===1){
		const resetBtn=document.createElement('button');
		resetBtn.id='reset';
		resetBtn.innerText="RESET"
		resetBtn.addEventListener('click',resetPage);
		document.body.appendChild(resetBtn);
	}
}

function resetPage() {
	location.reload();
}


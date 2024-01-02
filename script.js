//your code here
const images=document.querySelectorAll('img');
let selectedImgs=[];

const resetBtn=document.createElement('button');
resetBtn.id='reset';
resetBtn.innerText="RESET"
resetBtn.addEventListener('click',resetPage);

const verifyBtn=document.createElement('button');
verifyBtn.id='verify';
verifyBtn.innerText='VERIFY';
verifyBtn.addEventListener('click',verifySelection);

const para=document.createElement('p');
para.id='para';

for(let i=0;i<images.length;i++){
	images[i].addEventListener('click',selectImg);
}

function selectImg(e) {
	e.target.classList.add('selected');
	selectedImgs.push(e.target.className);
	if(selectedImgs.length===1){
		
		document.body.appendChild(resetBtn);
	}
	else if(selectedImgs.length===2){
		
		document.body.appendChild(verifyBtn);
	}
}

function verifySelection() {
	verifyBtn.style.display='none';
	if(selectedImgs[0]===selectedImgs[1]){
		para.innerText="You are a human. Congratulations!";
	}
	else{
		para.innerText="We can't verify you as a human. You selected the non-identical tiles."
	}
	document.body.appendChild(para);
}
function resetPage() {
	location.reload();
}


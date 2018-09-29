var previewList = document.querySelectorAll(".preview li img");
var screen = document.querySelector(".screen");

var activePreview = 0;

for(var i = 0; i < previewList.length; i++){
	var preview = previewList[i];
	preview.addEventListener('click',setClickedItem,false);
	preview.itemID = i;
}

previewList[activePreview].classList.add("active");

function setClickedItem(e){
	removeActiveLinks();
	var clickedLink = e.target;
	activeLink = clickedLink.itemID;
	changePosition(clickedLink);
}

function removeActiveLinks(){
	for (var i = 0; i < previewList.length; i++){
		previewList[i].classList.remove("active");
	}
}
function changePosition(preview){
	preview.classList.add("active");
	screen.style.left = preview.itemID*(-656)+"px"; 
}

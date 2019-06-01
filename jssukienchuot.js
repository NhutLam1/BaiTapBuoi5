var imgObj = null;
imgObj = document.getElementById('myImage').value;
function innit(){
	imgObj = document.getElementById('myImage');
	imgObj.style.position = 'relative';
	imgObj.style.left = '1px';
}
function moveRight(){
	imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}
window.onload = innit;
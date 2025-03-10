var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.getElementById("messageDisplay")
var H1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var HardBtn = document.querySelector("#HardBtn");

easyBtn.addEventListener("click" , function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0 ; i< squares.length ; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }
    else{
      squares[i].style.display = "none";
    }
  }
  H1.style.background = "#1e486c";
});
hardBtn.addEventListener("click" , function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0 ; i< squares.length ; i++){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    }
  
  H1.style.background = "#1e486c";
});

reset.addEventListener("click" , function(){
   reset.textContent = "New Colors"
   colors = generateRandomColors(numSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for(var i = 0; i < squares.length ; i++){
     squares[i].style.backgroundColor = colors[i];
   }
   H1.style.background = "#1e486c"
   messageDisplay.textContent = " ";

});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length ; i++){
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click" , function(){
    var clickedColor = this.style.backgroundColor;
    console.log("clicked");
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!!"
      messageDisplay.style.color = "#27ae60"
      changeColors(clickedColor);
      reset.textContent = "Play Again?"
    }
    else{
      this.style.backgroundColor = "black";
      messageDisplay.textContent = "Try Again!!";
      messageDisplay.style.color = "red";
      reset.textContent = "New Colors";
    }
  })
};

function changeColors(color){
 for(var i =0; i< squares.length ; i++){
   squares[i].style.backgroundColor = color;
   H1.style.backgroundColor = color;
 }
}
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

var toInsert = document.createElement("div");
toInsert.classList.add('insert');
document.body.appendChild(toInsert);


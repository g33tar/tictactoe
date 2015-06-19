var coun
var oMoves = []
var xMoves =[]
var boxes = document.getElementsByClassName('box')


// store winning combinations
	// var winComb = [
	// 	[0,1,2],
	// 	[0,3,6],
	// 	[0,4,8],
	// 	[1,4,7],
	// 	[2,4,6],
	// 	[2,5,8],
	// 	[3,4,5],
	// 	[6,7,8]
	// ];

//eventListener that is multiuse
	function addXandOListener(){
  for (var i = boxes.length - 1; i >= 0; i--) {
    boxes[i].addEventListener("click", addXorO);
  }
}
addXandOListener();

  function addXorO(event){
  if (event.target.innerHTML.length === 0){ //if box is empty
    if (counter % 2 === 0) {
      oMoves.push(parseInt(event.target.getAttribute("data-num")));
      event.target.innerHTML = "O";
      counter++;
    }
    else {
      xMoves.push(parseInt(event.target.getAttribute("data-num")));
      event.target.innerHTML = "X";
      counter++;
    }
	}
	console.log('the counter is ' + counter);
	if (counter === 9){
		alert("Game Over!");
	}
}

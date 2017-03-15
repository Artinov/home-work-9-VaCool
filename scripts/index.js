var ball = document.querySelector(".discoball");
var	elements = "here goes our awesome disco ball".split(" ");
var	i = 0;
function goDisco() {
		ball.setAttribute("class", "discoball " + elements[i]);
		(i > 5) ? i = 0: i++;;
	}
setInterval(goDisco,300);
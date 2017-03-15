var ball = document.querySelector(".discoball");
var	elements = "here goes our awesome disco ball".split(" ");
var	i = 0;
function goDisco() {
	alert(elements[1]);
		ball.setAttribute("class", "discoball " + elements[i]);
		i++;
		(i > 5) ? i = 0: i = i;
	}
setInterval(goDisco,300);
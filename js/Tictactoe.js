var cells= [1,2," 3"," "," "," "," "," "," "];
console.log(cells);


document.getElementById("a").innerHTML = cells[0];


document.getElementById("b").innerHTML = cells[1];

document.getElementById("c").innerHTML = cells[2];

document.getElementById("d").innerHTML = cells[3];

document.getElementById("e").innerHTML = cells[4];

document.getElementById("f").innerHTML = cells[5];

document.getElementById("g").innerHTML = cells[6];

document.getElementById("h").innerHTML = cells[7];

document.getElementById("i").innerHTML = cells[8];





// function opa() {
// cells = "x";
// console.log(cells);
// }
//cells.addEventListener("click", opa, false);

//element.onclick = opa;
// function opa()
// {
//   this.cells.color = red;
//     console.log(this);
// }


// function opa(event)
// {
//     console.log(event);
//    //document.getElementById("event").innerHTML = "x";

//     console.log("worked");
// }
$("td").on("click", function(){
	$(this).html("X");
}

	)
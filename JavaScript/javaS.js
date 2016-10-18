function addSomething (num, str)
{
	var add = num + str;
	
	alert ("Function " + add);
}

function changeStyle ()
{
	var text = document.getElementById("para1").style.color = "blue";
}

function klasa ()
{
	var par = document.getElementsByClassName("para");
	par[0].innerHTML = "New Text";
	par[0].style.color = "blue";
}

function klasa1 ()
{
	var par = document.getElementsByClassName("para");
	par[0].style.color = "";
}

function newElem ()
{
	//Heading
	var elementH = document.createElement("h2");
	var main = document.getElementById("main");
	main.appendChild(elementH);
	var textH = document.createTextNode("Battle");
	elementH.appendChild(textH);
	
	
	//Paragraph
	var element = document.createElement("p");
	main.appendChild(element);
	
	var text = document.createTextNode("Nesto Nesto");
	element.appendChild(text);
	
	var atribute = document.createAttribute("id");
	atribute.value = "test";
	element.setAttributeNode(atribute);
}

function validateTextbox() {
 
	var box = document.getElementById("name");
		if (box.value == "") {
			alert("The field marked in red cannot be blank");
			box.focus();
			box.style.border = "solid 3px red";
			return false;
		}
}
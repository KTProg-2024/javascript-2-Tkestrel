function getDate() 
{
	var dateString = new Date();
	document.getElementById("date").innerHTML=dateString;
}

function light()
{
  document.getElementById("date").style.color="black";
  document.getElementById("all").style.backgroundColor="white";
}

function dark()
{
	document.getElementById("date").style.color="white";
  document.getElementById("all").style.backgroundColor="black";
}

function update()
{
  var dateString = new Date();
	document.getElementById("date").innerHTML=dateString;
}
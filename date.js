function getDate() 
{
	var dateString = new Date();
	document.getElementById("date").innerHTML=dateString;
}

function light()
{
  document.getElementById("date").style.color="black";
  document.getElementById("date").style.backgroundcolor="white";
}

function dark()
{
	document.getElementById("date").style.color="white";
  document.getElementById("date").style.backgroundcolor="black";
}

function update()
{
  var dateString = new Date();
	document.getElementById("date").innerHTML=dateString;
}
function changeNameOnLoad() {
	var nameSpot = document.getElementbyID ('name');

	var userName = prompt("What is your name?");

	nameSpot.innerHTML = "," + userName;

}

changeNameOnLoad ();
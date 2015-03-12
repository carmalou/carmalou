function showContent() {
	document.getElementById("hiddenContent").style.display="block";
		if(document.getElementById("hiddenContact").style.display="block") {
			document.getElementById("hiddenContact").style.display="none";
		}
}
function showContact() {
		document.getElementById("hiddenContact").style.display="block";
		if (document.getElementById("hiddenContent").style.display="block") {
			document.getElementById("hiddenContent").style.display="none";
		}
}
function hideContent() {document.getElementById("hiddenContent").style.display="none";}
function hideContact() {document.getElementById("hiddenContact").style.display="none";}
$(document).ready(function(){
	$("header nav ul li:first-child").click(function(){
		console.log("hamburger clicked")
		$("header nav").toggleClass("show");
	})
  
});
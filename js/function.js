// this is required for the (not so) edge case where your script is loaded after the document has loaded
// https://developer.mozilla.org/en/docs/Web/API/Document/readyState
if (document.readyState !== 'loading') {
  ready()
} else {
  // the document hasn't finished loading/parsing yet so let's add an event handler
  document.addEventListener('DOMContentLoaded', ready)
}

function ready() {
	// When the user scrolls the page, execute myFunction 
	window.onscroll = function() {myFunction()};

	// Get the header
	var sidebar = document.getElementById("sidebar");

	// Get the offset position of the sidebar
	var sidebaroff = sidebar.offsetTop;

	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
	  if (window.pageYOffset >= sidebaroff) {
	    sidebar.classList.add("sticky");
	  } else {
	    sidebar.classList.remove("sticky");
	  }
	}
}
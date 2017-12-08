// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var sidebar = document.getElementById("sidebar");

// Get the offset position of the navbar
var sidebar = sidebar.offsetTop;

sidebar.scrollTop = 300px

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


var p = $( "p:first" );
$( "p:last" ).text( "scrollTop:" + p.scrollTop() );
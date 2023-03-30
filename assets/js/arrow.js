// Get the arrow element
var arrow = document.getElementById("back-to-top");

// Listen for the scroll event
window.addEventListener("scroll", function() {
  // If the user has scrolled down 500 pixels, show the arrow
  if (window.scrollY > 500) {
    arrow.style.display = "block";
  } else {
    // Otherwise, hide the arrow
    arrow.style.display = "none";
  }
});

// Listen for the click event on the arrow
arrow.addEventListener("click", function() {
  // Scroll back to the top of the page
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

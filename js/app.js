// make the bottom bar appear only when the user has scrolled to the bottom of the page
// NOT working!
window.addEventListener('scroll', function() {
  var bottomBar = document.getElementById('bottom-bar');
  var scrollPosition = window.innerHeight + window.pageYOffset;
  if (scrollPosition >= document.body.offsetHeight) {
    bottomBar.style.display = 'block';
  } else {
    bottomBar.style.display = 'none';
  }
});
